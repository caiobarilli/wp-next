import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:8000/graphql',
  documents: 'src/graphql/**/*.ts',
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      plugins: []
    }
  }
}

export default config
