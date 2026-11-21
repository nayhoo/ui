https://reactcosmos.org/docs/getting-started/next#limitations

Only Component Fixtures fixtures can be exported from a fixture module with the 'use client' descriptor. That's because Client fixture modules are passed as is to the Server render tree and their exports are expected to be components by design. While Node Fixtures and Multi-Fixtures cannot be used in Client fixtures, all Cosmos fixture formats are supported in Server fixtures.
