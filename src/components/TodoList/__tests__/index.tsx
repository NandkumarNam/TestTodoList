/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import {screen, render} from '@testing-library/react';
import TodoList from '../index';

const completeTodoList = [
    { index: 1, value: "learn react", done: false, styleClass:"" },
    { index: 2, value: "Go shopping", done: true, styleClass:"completed" }
]

test('On render', () => {
    render(<TodoList todoItems={completeTodoList}/>);
    screen.debug();
})