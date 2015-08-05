/**
 * Copyright 2013-2015, Hudl
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule VerifyChildrenOrder
 */

import invariant from 'invariant';

/*
 * We have to ensure developers use our libary correctly. So in dev mode we're going to throw
 * errors here when they fail to do things "by the book".
 *
 * This is just a concept. Like everything
 */

export default function verifyChildrenOrder(propChildren : array) : void {
  const children = {};

  propChildren.forEach( (child : object, index : number) => {
    children[child.type.name] = index;
  });

  invariant(
    !(children.Controls > children.Scrubber),
    'The `Controls` component cannot come after the `Scrubber` component.'
  );
}
