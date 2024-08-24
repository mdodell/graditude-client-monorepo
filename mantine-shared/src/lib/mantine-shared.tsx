import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

export function MantineShared({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={{ primaryColor: 'red' }}>
      {children}
    </MantineProvider>
  );
}

export default MantineShared;
