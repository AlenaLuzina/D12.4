fun main() {
    // some code

    doSomething {
       // some code
       return
    }

    // some code
}

inline fun doSomething(action: ()-> Unit) {
    // some code
    action()
}
