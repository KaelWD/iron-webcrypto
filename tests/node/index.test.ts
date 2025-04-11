import { deepStrictEqual as deepEqual, rejects } from 'node:assert'
import { createHmac } from 'node:crypto'
import { describe, it } from 'node:test'
import { tests } from '../index.js'

// eslint-disable-next-line @typescript-eslint/no-misused-promises
tests({ createHmac, describe, it, deepEqual, rejects })
