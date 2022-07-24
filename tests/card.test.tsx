/**
 * KEY NOTES FOR USING
 * - We need to import testing library from this URL https://esm.sh/@testing-library/preact@3.2.2
 *  -- I'm noticing that testing-library has issues with deno and the dom. 
 * - The import can be placed in import_map.json and titled 'testing-libary/preact' so it looks more 'clean' on import
 * - Fresh could to create a tsconfig file on creation.  I'm using the reffrence tags as a hack until it is configured.
 * ref: https://deno.land/manual@v1.8.3/typescript/configuration#using-the-quotlibquot-property
 * ref: https://github.com/denoland/deno/issues/10139
 * - To run these tests we need to run deno test -A
 * 
 */
/** @jsx h */   
/// <reference no-default-lib="true"/>
/// <reference lib="dom" /> 
/// <reference lib="deno.ns" />
/// <reference lib="esnext" /> 

import { h } from 'preact';

import render from "https://esm.sh/preact-render-to-string@5.2.1";
import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.32-alpha/deno-dom-wasm.ts";
import { describe, it } from "https://deno.land/std@0.148.0/testing/bdd.ts";
import { assertEquals, assertExists } from "https://deno.land/std@0.148.0/testing/asserts.ts";

import Card from '../components/Card.tsx';

describe('Card component', () => {
  it('should exists.', () => {
    const compAsString  = render(<Card contentTitle={'Test Title'} contentBody={'Lorem ispum...'} />)
    const doc = new DOMParser().parseFromString(compAsString, 'text/html');
  
    assertExists(doc);
  });

  it('should have a title and body.', () => {
    // Arrange
    const compAsString  = render(<Card contentTitle={'Test Title'} contentBody={'Lorem ispum...'} />)
    const doc = new DOMParser().parseFromString(compAsString, 'text/html');

    // Act
    const title = doc?.querySelector('h1');
    const body = doc?.querySelector('div');

    // Assert
    assertEquals(title?.textContent, 'Test Title')
    assertEquals(body?.textContent, 'Lorem ispum...')
  });
});
