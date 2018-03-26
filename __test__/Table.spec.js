import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import ConnectedTable,{Table} from '../src/components/Table'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'

import {updateTradingValues} from '../src/actions/updateTradingValuesActions'
import {createStore} from 'redux'
import updateTradingValuesReducers from '../src/reducers/updateTradingValuesReducers'

const tradingValues = [{"timestamp":1522088675779,"index":1171,"stocks":{"NASDAQ":5.4068431512503855e-16,"CAC40":3.945096443354243e-24}},{"timestamp":1522088676780,"index":1172,"stocks":{"NASDAQ":1.522829895583126e-16,"CAC40":3.94555152592615e-24}},{"timestamp":1522088677781,"index":1173,"stocks":{"NASDAQ":6.206572557378061e-17,"CAC40":3.596168489673036e-24}},{"timestamp":1522088678784,"index":1174,"stocks":{"NASDAQ":4.9985934128653843e-17,"CAC40":2.5068263372660503e-24}},{"timestamp":1522088679789,"index":1175,"stocks":{"NASDAQ":4.997828466041129e-17,"CAC40":2.5073402767563972e-24}},{"timestamp":1522088680793,"index":1176,"stocks":{"NASDAQ":5.594087737951195e-17,"CAC40":2.5083468472811927e-24}},{"timestamp":1522088681797,"index":1177,"stocks":{"NASDAQ":5.578691795006405e-17,"CAC40":2.508349620657306e-24}},{"timestamp":1522088682801,"index":1178,"stocks":{"NASDAQ":4.636776164239889e-17,"CAC40":2.5525499766229472e-24}},{"timestamp":1522088685023,"index":1179,"stocks":{"NASDAQ":5.275109371861418e-17,"CAC40":2.5958349021816915e-24}},{"timestamp":1522088686026,"index":1180,"stocks":{"NASDAQ":3.5213374130575515e-17,"CAC40":2.5952393506150048e-24}},{"timestamp":1522088687029,"index":1181,"stocks":{"NASDAQ":4.4300319142539933e-17,"CAC40":1.1680797499574855e-24}},{"timestamp":1522088688031,"index":1182,"stocks":{"NASDAQ":4.1453589642739793e-17,"CAC40":1.1718150343238e-24}},{"timestamp":1522088689035,"index":1183,"stocks":{"NASDAQ":2.6854618300769548e-17,"CAC40":1.1718186307697852e-24}},{"timestamp":1522088690037,"index":1184,"stocks":{"NASDAQ":2.6859395440503376e-17,"CAC40":1.742369129222868e-24}},{"timestamp":1522088691037,"index":1185,"stocks":{"NASDAQ":2.5965792973917657e-17,"CAC40":1.7471786321970145e-24}},{"timestamp":1522088692041,"index":1186,"stocks":{"NASDAQ":3.421940340622865e-17,"CAC40":1.5017701094071147e-24}},{"timestamp":1522088693043,"index":1187,"stocks":{"NASDAQ":3.4197654206442485e-17,"CAC40":1.8572053077966067e-24}},{"timestamp":1522088694043,"index":1188,"stocks":{"NASDAQ":3.370772869213959e-17,"CAC40":1.8593797991467923e-24}},{"timestamp":1522088695043,"index":1189,"stocks":{"NASDAQ":3.385950852240345e-17,"CAC40":1.6064393325859262e-24}},{"timestamp":1522088696043,"index":1190,"stocks":{"NASDAQ":3.276376453421659e-17,"CAC40":1.5931687861388128e-24}}]

// Snapshot for Table React Component
describe('>>>TABLE --- Snapshot',()=>{
    it('+++capturing Snapshot of Table', () => {
        const renderedValue = renderer.create(<Table tradingValues={tradingValues}/>).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
//*******************************************************************************************************
describe('>>>TABLE --- Shallow Render REACT COMPONENTS',()=>{
    let wrapper

    beforeEach(()=>{
        wrapper = shallow(<Table tradingValues={tradingValues}/>)
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('+++ contains td CAC40', () => {
      expect(wrapper.find('td').at(0).nodes[0].key).toBe('CAC40-1171');
      expect(wrapper.find('td').at(0).nodes[0].props.children).toBe(3.945096443354243e-24);
    });
    it('+++ contains td NASDAQ', () => {
      expect(wrapper.find('td').at(20).nodes[0].key).toBe('NASDAQ-1171');
      expect(wrapper.find('td').at(20).nodes[0].props.children).toBe(5.4068431512503855e-16);
    });
});

//*******************************************************************************************************
describe('>>>TABLE --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
    const initialState = {tradingValues:[{stocks: 'somestocks'}]}
    const mockStore = configureStore()
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ConnectedTable store={store} /> )
    })

    it('+++ render the connected(SMART) component', () => {
       expect(container.length).toEqual(1)
    });

    it('+++ check Prop matches with initialState', () => {
       expect(container.prop('tradingValues')).toEqual(initialState.tradingValues)
    });

});

//*******************************************************************************************************
describe('>>>TABLE --- REACT-REDUX (Mount + wrapping in <Provider>)',()=>{
    const initialState = {tradingValues}
    const mockStore = configureStore()
    let store,wrapper

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = mount( <Provider store={store}><ConnectedTable /></Provider> )
    })

    it('+++ render the connected(SMART) component', () => {
       expect(wrapper.find(ConnectedTable).length).toEqual(1)
    });

    it('+++ check Prop matches with initialState', () => {
       expect(wrapper.find(Table).prop('tradingValues')).toEqual(initialState.tradingValues)
    });

    it('+++ check action on dispatching ', () => {
        let action
        store.dispatch(updateTradingValues(tradingValues))
        action = store.getActions()
        expect(action[0].type).toBe("UPDATE_TRADING_VALUES")
    });

});
//*******************************************************************************************************
describe('>>>TABLE --- REACT-REDUX (actual Store + reducers) more of Integration Testing',()=>{
    const initialState = {tradingValues}
    let store,wrapper

    beforeEach(()=>{
        store = createStore(updateTradingValuesReducers)
        wrapper = mount( <Provider store={store}><ConnectedTable /></Provider> )
    })

    it('+++ check Prop matches with initialState', () => {
        store.dispatch(updateTradingValues(tradingValues))
       expect(wrapper.find(Table).prop('tradingValues')).toBe(tradingValues)
    });

});
//*******************************************************************************************************