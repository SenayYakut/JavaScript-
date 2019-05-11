# YDK JavaScript 

* Storing variables in some location, and for finding those variables at a later time. We'll call that set of rules: Scope.

## Compiler Theory

* JavaScript falls under the general category of "dynamic" or "interpreted" languages, it is in fact a compiled language.

* In a traditional compiled-language process, a chunk of source code, your program, will undergo typically three steps before it is executed, roughly called "compilation":

1. **Tokenizing/Lexing:**
  *  Breaking up a string of characters into meaningful (to the language) chunks, called tokens.
2. **Parsing:**
  *  Taking a stream (array) of tokens and turning it into a tree of nested elements, which collectively represent the grammatical structure of the program. 
3. **Code-Generation:**
  *  The process of taking an AST and turning it into executable code. This part varies greatly depending on the language, the platform it's targeting

## The Cast

1. **Engine**
 * Responsible for start-to-finish compilation and execution of our JavaScript program.
2. **Compiler:**
 * One of Engine's friends; handles all the dirty work of parsing and code-generation (see previous section).
3. **Scope:**
 * Another friend of Engine; collects and maintains a look-up list of all the declared identifiers (variables), and enforces a strict set of rules as to how these are accessible to currently executing code.
 
# Lexical Scope

 * There are two predominant models for how scope works. The first of these is by far the most common, used by the vast majority of programming languages. It's called Lexical Scope,

* Lexical scope means that scope is defined by author-time decisions of where functions are declared. The lexing phase of compilation is essentially able to know where and how all identifiers are declared, and thus predict how they will be looked-up during execution.

# Dynamic Scope

* The other model, which is still used by some languages (such as Bash scripting, some modes in Perl, etc.) is called Dynamic Scope.

# Blocks As Scopes

* While functions are the most common unit of scope, and certainly the most wide-spread of the design approaches in the majority of JS in circulation, other units of scope are possible, and the usage of these other scope units can lead to even better, cleaner to maintain code.

# Allocation inJavaScript

## Value Initialization:
* In order to not bother the programmer with allocations, JavaScript does it alongside with declaring values.

## Using values

* Using values basically means reading and writing in allocated memory. This can be done by reading or writing the value of a variable or an object property or even passing an argument to a function.

## Release when the memory is not needed anymore
* Most memory management issues come at this phase. The hardest task here is to find when "the allocated memory is not needed any longer". It often requires the developer to determine where in the program such piece of memory is not needed anymore and free it.

* High-level languages embed a piece of software called "garbage collector" whose job is to track memory allocation and use in order to find when a piece of allocated memory is not needed any longer in which case, it will automatically free it. This process is an approximation since the general problem of knowing whether some piece of memory is needed is undecidable (can't be solved by an algorithm).

## Garbage collection

* This is the most naive garbage collection algorithm. This algorithm reduces the definition of "an object is not needed anymore" to "an object has no other objects referencing it". An object is considered garbage collectible if there are zero references pointing at this object.

## Event delegation
## Explain how `this` work in JavaScript
