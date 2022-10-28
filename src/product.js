export class Product {
  constructor({id, name, type, dimensions}) {
    if (!id || !name || !type || !dimensions) {
      throw Error("id, name and type, dimensions are required properties")
    }
    this.id = id
    this.name = name
    this.type = type
    this.dimensions = dimensions
  }
}