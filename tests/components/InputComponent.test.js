import React from 'react';
import TestRenderer from 'react-test-renderer';
import InputComponent from '../../src/components/InputComponent';

/** this test validates refs */

it('Validating refs', () => {
  let focused = false;
  TestRenderer.create(
    <InputComponent />,
    {
      createNodeMock: (element) => {
        if (element.type === 'input') {
          // mock a focus function
          return {
            focus: () => {
              focused = true;
            }
          };
        }
        return null;
      }
    }
  );

expect(focused).toBe(true);
});
