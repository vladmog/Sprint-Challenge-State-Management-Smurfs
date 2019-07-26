############################################################################################################

1. What problem does the context API help solve?

    Context API solves the same problems as Redux (de-necessitates prop drilling by implementing a "global state"), but without all the Redux boiler-plating.

############################################################################################################

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions: Objects that tell a reducer what to do. Commonly attached to functions in the action creator to serve some additional      
             functionality
    Reducers: State-management that updates state in a predictable way based on particular actions that are dispatched
    Store: Global-state

############################################################################################################

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Component state: State accessible only to a component and optionally its children.
                     Use it when state is only required by a component and its children
    Application state: Global state
                     Use it when particular state is used across the application

############################################################################################################

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux thunk is a middleware that intercepts action creators that return functions, runs those functions, then sends off whatever is returned to the reducer.

############################################################################################################

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    I like context but don't feel I got enough exposure to feel comfortable using it yet.

############################################################################################################
