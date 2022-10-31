/* global fetch */

class NanoReplication {
  constructor (nano) {
    this.nano = nano
  }

  enable (source, target, opts) {}
  query (id, opts) {}
  disable (id, opts) {}
}

class NanoDBManager {
  constructor (nano) {
    this.nano = nano
    this.replication = new NanoReplication(nano)
  }

  create (name) {}
  get (name) {}
  destroy (name) {}
  list () {}
  compact (name, designName) {}
  replicate (source, target, opts = {}) {}
  changes (name, params) {}
  info () {}

  use (name) {
    return this.nano.use(name)
  }

  scope (name) {
    return this.nano.use(name)
  }
}

class NanoDB {
  constructor (nano, name) {
    this.nano = nano
    this.name = name
  }

  insert (doc, params) {}
  destroy (docname, rev) {}
  get (docname, params) {}
  head (docname) {}
  bulk (docs, params) {}
  list (params) {}
  fetch (docnames, params) {}
  fetchRevs (docnames, params) {}
  createIndex (indexDef) {}
  changesReader () {}
  partitionInfo (partitionKey) {}
  partitionedList (partitionKey, params) {}
  partitionedListAsStream (partitionKey, params) {}
  partitionedFind (partitionKey, query) {}
  partitionedFindAsStream (partitionKey, query) {}
  partitionedSearch (partitionKey, designName, searchName, params) {}
  partitionedSearchAsStream (partitionKey, designName, searchName, params) {}
  partitionedView (partitionKey, designName, viewName, params) {}
  partitionedViewAsStream (partitionKey, designName, viewName, params) {}
}

class Nano {
  constructor (options) {
    this.config = typeof options === 'string' ? { url: options } : options
    this.db = new NanoDBManager(this)
  }

  use (name) {
    return new NanoDB(this, name)
  }

  scope (name) {
    return this.use(name)
  }
}

export default function nano (url) {
  return new Nano(url)
}
