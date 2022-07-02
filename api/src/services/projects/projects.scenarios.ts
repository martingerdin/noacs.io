import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ProjectCreateArgs>({
  project: {
    one: { data: { title: 'String', aim: 'String', design: 'String' } },
    two: { data: { title: 'String', aim: 'String', design: 'String' } },
  },
})

export type StandardScenario = typeof standard
