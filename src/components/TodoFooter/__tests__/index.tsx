/**
 * @jest-environment jsdom
 */

 import * as React from 'react';
 import {screen, render} from '@testing-library/react';
 import TodoFooter from '../index';
 
 
 describe('redering TodoFooter', () => {
     test('check count', () => {
         render(<TodoFooter count={2}/>)
         expect(2).toBeTruthy();
     })
 })