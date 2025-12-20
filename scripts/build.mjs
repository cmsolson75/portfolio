#!/usr/bin/env node
import { cp, mkdir, rm } from 'fs/promises';
import { resolve } from 'path';

const source = resolve('site');
const dest = resolve('dist');

await rm(dest, { recursive: true, force: true });
await mkdir(dest, { recursive: true });
await cp(source, dest, { recursive: true });

console.log('Build complete: site → dist');
