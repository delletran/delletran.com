migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n4ps4ouv1iicn9l")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n4ps4ouv1iicn9l")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
