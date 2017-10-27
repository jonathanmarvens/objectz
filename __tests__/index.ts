/**
 *******************************************************************************
 * Copyright 2017-present Jonathan Barronville <jonathan@belairlabs.com>       *
 *                                                                             *
 * Licensed under the Apache License, Version 2.0 (the "License");             *
 * you may not use this file except in compliance with the License.            *
 * You may obtain a copy of the License at                                     *
 *                                                                             *
 *     http://www.apache.org/licenses/LICENSE-2.0                              *
 *                                                                             *
 * Unless required by applicable law or agreed to in writing, software         *
 * distributed under the License is distributed on an "AS IS" BASIS,           *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.    *
 * See the License for the specific language governing permissions and         *
 * limitations under the License.                                              *
 *******************************************************************************
 */

import {
  createOwnFrozenObject,
  createOwnNonEnumerableFrozenObject,
  createOwnNonEnumerableSealedObject,
  createOwnSealedObject,
} from '../src/index'

test('`createOwnFrozenObject(…)` returns a frozen object.', () => {
  const object001 = {foo: 'bar'}
  expect(Object.isFrozen(object001)).toBe(false)
  const object002 = createOwnFrozenObject<typeof object001>(object001)
  expect(Object.isFrozen(object002)).toBe(true)
})

test('`createOwnNonEnumerableFrozenObject(…)` returns a non-enumerable frozen object.', () => {
  const object001 = {foo: 'bar'}
  expect(Object.isFrozen(object001)).toBe(false)
  const object002 = createOwnNonEnumerableFrozenObject<typeof object001>(object001)
  expect(Object.isFrozen(object002)).toBe(true)
  let fooPropertyFound = false
  if (Object.prototype.propertyIsEnumerable.call(object002, 'foo')) {
    fooPropertyFound = true
  }
  for (let property in object002) {
    if (property === 'foo') {
      fooPropertyFound = true
    }
  }
  expect(fooPropertyFound).toBe(false)
})

test('`createOwnSealedObject(…)` returns a sealed object.', () => {
  const object001 = {foo: 'bar'}
  expect(Object.isSealed(object001)).toBe(false)
  const object002 = createOwnSealedObject<typeof object001>(object001)
  expect(Object.isSealed(object002)).toBe(true)
})

test('`createOwnNonEnumerableSealedObject(…)` returns a non-enumerable frozen object.', () => {
  const object001 = {foo: 'bar'}
  expect(Object.isSealed(object001)).toBe(false)
  const object002 = createOwnNonEnumerableSealedObject<typeof object001>(object001)
  expect(Object.isSealed(object002)).toBe(true)
  let fooPropertyFound = false
  if (Object.prototype.propertyIsEnumerable.call(object002, 'foo')) {
    fooPropertyFound = true
  }
  for (let property in object002) {
    if (property === 'foo') {
      fooPropertyFound = true
    }
  }
  expect(fooPropertyFound).toBe(false)
})
