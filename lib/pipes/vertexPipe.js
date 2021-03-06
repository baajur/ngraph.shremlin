/**
 * # Vertex Pipe
 *
 * VertexPipe is an entry point to all graph traversal.
 * You access it by calling ```g.V()```. Even though name ```V``` is
 * really obscure, I tried to replicated gremlin DSL. Maybe it should be changed
 * or aliased to friendly name (e.g. `Vertices` or `Nodes`).
 *
 * ```
 *  var shremlin = require('ngraph.shremlin');
 *  var g = shremlin(graph);
 *  g.V()
 *   .forEach(function(vertex) {
 *     console.log(vertex.id);
 *     // prints all node ids in the graph
 *   });
 * ```
 *
 * You can also pass a vertex id from which you want to start your iteration:
 * ```
 *  g.V(42) // start from node with id 42
 *   .forEach(function(vertex) {
 *     console.log(vertex.id); // prints 42
 *   });
 * ```
 */

module.exports = VertexPipe;

// See also: [BasePipe](../basePipe.html)
var BasePipe = require('../basePipe'),
    util = require('util');

util.inherits(VertexPipe, BasePipe);

function VertexPipe(graph) {
  if (!(this instanceof VertexPipe)) {
    return new VertexPipe(graph);
  }

  BasePipe.call(this);
  this._graph = graph;
};

VertexPipe.prototype._moveNext = function () {
  if (this._sourcePipe.moveNext()) {
    this._current = this._sourcePipe.current();
    return true;
  }

  return false;
};
