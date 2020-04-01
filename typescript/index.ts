interface Lady {
    accept(visitor: Visitor): void
}

class AmericanLady implements Lady {
    accept(visitor: Visitor): void {
        visitor.visit(this)
    }
}

class JapanLady implements Lady {
    accept(visitor: Visitor): void {
        visitor.visit(this)
    }
}

interface Visitor {
    visit(lady: Lady): void
}

class SayLoveVisitor implements Visitor {
    visit(lady: Lady): void {
        if (lady instanceof AmericanLady)
            console.log('I love you')
        if (lady instanceof JapanLady)
            console.log('Aishite imasu')
    }
}

class SayGoodByeVisitor implements Visitor {
    visit(lady: Lady): void {
        if (lady instanceof AmericanLady)
            console.log('Good bye!')
        if (lady instanceof JapanLady)
            console.log('Sayounara!')
    }
}

let lady: Lady = new JapanLady()
lady.accept(new SayGoodByeVisitor())