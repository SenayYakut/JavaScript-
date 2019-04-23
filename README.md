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
