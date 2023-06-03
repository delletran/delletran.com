migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n4ps4ouv1iicn9l")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_UU59gF4` ON `posts` (`slug`)",
    "CREATE UNIQUE INDEX `idx_8YH5WO9` ON `posts` (`title`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xnuokwf6",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n4ps4ouv1iicn9l")

  collection.indexes = []

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xnuokwf6",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
