# Trading Graphs

This project is about displaying a graph and a table of CAC40 and NASDAQ stock evolution.
This frontend page calls an API that provides the data, that are refreshing every second
The user can edit the data in the table and the frontend page will keep the data even after refresh.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

```
git clone git@github.com:trollepierre/tradingGraphs.git
```

### Installing

```
yarn
```

### Starting

```
yarn start
```

### Running the tests

```
yarn test
```

### Linting

```
yarn lint
```

## Understand

The main component is *Layout*. 
The *Layout* contains the *Graph* and the *Table*. 
The *Table* is composed of *Cells*

All the component above are connecting to the store.

The *Cell* is displaying a *RenderingCell* by default or an *EditableCell* on editMode.
On input, an action ADD_SPECIFIC_VALUE is dispatched.
This action will affect the two reducers to add a new *specificValues* and to update the *tradingValues*

Every second, Layout will dispatch the action UPDATE_TRADING_VALUES. This action will update *tradingValues* but it will take into consideration the former *specificValues* added by user.

This project is a POC on Redux. I try to follow TDD as possible however it was complicated to write correct tests as a first try. The quality of the integration tests (tests on components) could be improved. But unit tests on store methods is optimal.


## Authors

* **Pierre TROLLE** [GitHub](https://github.com/trollepierre)

