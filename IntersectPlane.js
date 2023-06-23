class IntersectPlane {
    constructor(n1, n2, n3, p1, p2, p3) {
      this.normal = createVector(n1, n2, n3); // The normal vector of the plane
      this.point = createVector(p1, p2, p3); // A point on the plane
      this.d = this.point.dot(this.normal);
    }
  
    getLambda(Q, v) {
      return (-this.d - this.normal.dot(Q)) / this.normal.dot(v);
    }
  
    getIntersection(Q, v) {
      let lambda = this.getLambda(Q, v);
      if (lambda > 0) {
        // Calculate the intersection point
        return p5.Vector.add(Q, p5.Vector.mult(v, lambda));
      } else {
        // The ray does not intersect the plane
        return null;
      }
    }
  }
  