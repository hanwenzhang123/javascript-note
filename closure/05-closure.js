Function 
- a set of instruction that we give JS to run later

Tread of execution
- goes through the code run line by line processing in order

Memory
- a store of data (variable environment) where anything defined in the function is stored


Global Execution Context
- global memory (save values)
  // we invoke the function, then push the function to the call stack 
  // then thread of execution has entered to the execution context
- call stack (the top most always currently executing)
  // once the function completed execution, save the variable to the global memory
  // then we pop the function off of the call stack which is eligible for garbage collection
- for function - go execution context

parameters - placeholder, which the value passing in as the argument
garbage collection - collect memory which was allocated by the program, but is no longer referenced
    - what memory is no longer being used by an application and to recycle this memory for other uses
    
Functions can have multiple names - we can use function definition, no need parenthesis
 
