import { render } from '@testing-library/react';

import MantineShared from './mantine-shared';

describe('MantineShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MantineShared />);
    expect(baseElement).toBeTruthy();
  });
});
