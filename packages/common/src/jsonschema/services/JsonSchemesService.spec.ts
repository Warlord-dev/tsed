import {inject, TestContext} from "@tsed/testing";
import {expect} from "chai";
import {Circular, IndirectCircular, JsonFoo2, Thingy} from "../../../../../test/helper/classes";
import {JsonSchemesService, Property} from "../../../src/jsonschema";
import {Allow, Required} from "../../../src/mvc/decorators";

describe("JsonSchemesService", () => {
  let result: any;
  beforeEach(TestContext.reset);
  afterEach(TestContext.reset);
  describe("use case 1", () => {
    it("should return a schema with his definitions", inject([JsonSchemesService], (service: JsonSchemesService) => {
      // GIVEN
      const result = service.getSchemaDefinition(JsonFoo2);

      // WHEN
      expect(result).to.deep.eq({
        definitions: {
          JsonAgeModel: {
            properties: {
              age: {
                type: "number"
              }
            },
            type: "object"
          },
          JsonFoo1: {
            properties: {
              test: {
                type: "string"
              }
            },
            type: "object"
          },
          JsonNameModel: {
            properties: {
              name: {
                type: "string"
              }
            },
            type: "object"
          }
        },
        properties: {
          ageModel: {
            $ref: "#/definitions/JsonAgeModel"
          },
          arrayOfString: {
            items: {
              type: "string"
            },
            type: "array"
          },
          dateStart: {
            type: "string"
          },
          foo: {
            type: "object"
          },
          foos: {
            items: {
              type: "object"
            },
            type: "array"
          },

          foos2: {
            items: {
              $ref: "#/definitions/JsonFoo1"
            },
            type: "array"
          },
          mapOfString: {
            additionalProperties: {
              type: "string"
            }
          },
          name: {
            minLength: 3,
            type: "string"
          },
          nameModel: {
            $ref: "#/definitions/JsonNameModel"
          },
          object: {
            type: "object"
          },
          password: {
            type: "string"
          },
          test: {
            minLength: 3,
            type: "string"
          },
          theMap: {
            additionalProperties: {
              $ref: "#/definitions/JsonFoo1"
            }
          },
          theSet: {
            additionalProperties: {
              $ref: "#/definitions/JsonFoo1"
            }
          },
          uint: {
            type: "number"
          }
        },
        required: ["test", "foo"],
        type: "object"
      });
    }));
  });

  describe("use case 2", () => {
    before(
      inject([JsonSchemesService], (service: JsonSchemesService) => {
        result = service.getSchemaDefinition(Thingy);
      })
    );
    after(TestContext.reset);

    it("should return a schema with his definitions", () => {
      expect(result).to.deep.eq({
        definitions: {
          Stuff: {
            properties: {
              name: {
                type: "string"
              },
              nested: {
                $ref: "#/definitions/Nested"
              }
            },
            type: "object"
          },
          Nested: {
            properties: {
              count: {
                type: "number"
              }
            },
            type: "object"
          }
        },
        properties: {
          stuff: {
            $ref: "#/definitions/Stuff"
          }
        },
        type: "object"
      });
    });
  });

  describe("with circular reference", () => {
    before(
      inject([JsonSchemesService], (service: JsonSchemesService) => {
        result = service.getSchemaDefinition(Circular);
      })
    );
    after(TestContext.reset);

    it("should return a schema with his definitions", () => {
      expect(result).to.deep.eq({
        definitions: {
          Circular: {
            properties: {
              parent: {
                $ref: "#/definitions/Circular"
              }
            },
            type: "object"
          }
        },
        properties: {
          parent: {
            $ref: "#/definitions/Circular"
          }
        },
        type: "object"
      });
    });
  });

  describe("with indirect circular reference", () => {
    before(
      inject([JsonSchemesService], (service: JsonSchemesService) => {
        result = service.getSchemaDefinition(IndirectCircular);
      })
    );
    after(TestContext.reset);

    it("should return a schema with his definitions", () => {
      expect(result).to.deep.eq({
        definitions: {
          Dependency: {
            properties: {
              dep: {
                $ref: "#/definitions/IndirectCircular"
              }
            },
            type: "object"
          },
          IndirectCircular: {
            properties: {
              parent: {
                $ref: "#/definitions/Dependency"
              }
            },
            type: "object"
          }
        },
        properties: {
          parent: {
            $ref: "#/definitions/Dependency"
          }
        },
        type: "object"
      });
    });
  });
});
