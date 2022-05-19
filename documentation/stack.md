# Technologies Documentation

## React Documentation
We will be using React 17. Lots of function components and hooks will be used in order to manipulate state.
React provides us almost an OOP way of thinking of rendering pages. We want to write components and abstract
pieces of code so we can reuse components to write clean code.

## Redux Documentation
Redux is a global state management framework.
Think of Redux as like a client-server relationship. Instead of a server, there is a store.
This store is all knowing and has access to pieces of state that us developers have deemed necessary
to be stored globally.
### How do we interact with this store?
We're able to fetch pieces of state by hooking into the store using this hook called `useSelector`. Think of it as saying you want to select this piece of state and have a reference to it.
### How do we change pieces of state?
In Redux, there may be certain cases in which a piece of state should change. For example, if you want to increment a count, you might think that its like `count++`. But in Redux (and React), state is immutable, meaning that you can't change it directly. Instead, state is modified through things called `actions`. These `actions` are `dispatched` by us in certain functions in order to make a request to the store to change a piece of state. The store handles these requests through these things called `reducers`. Reducers tell the store what initial values some pieces of state hold, as well as what to do when an `action` is dispatched. Reducers handle these cases through a switch case statement, and changes the state based on the case.

## Mongo/Mongoose Document
Johnny gotta figure this part out for how we'll be cleaning implementing Mongoose.