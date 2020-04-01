"use strict";
class AmericanLady {
    accept(visitor) {
        visitor.visit(this);
    }
}
class JapanLady {
    accept(visitor) {
        visitor.visit(this);
    }
}
class SayLoveVisitor {
    visit(lady) {
        if (lady instanceof AmericanLady)
            console.log('I love you');
        if (lady instanceof JapanLady)
            console.log('Aishite imasu');
    }
}
class SayGoodByeVisitor {
    visit(lady) {
        if (lady instanceof AmericanLady)
            console.log('Good bye!');
        if (lady instanceof JapanLady)
            console.log('Sayounara!');
    }
}
let lady = new JapanLady();
lady.accept(new SayGoodByeVisitor());
