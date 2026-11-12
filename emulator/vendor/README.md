# TI-84 Plus CE emulator engine

The course UI uses the standalone Rust WebAssembly backend from
[hunterchen7/ti84ce](https://github.com/hunterchen7/ti84ce/tree/eb90c33cfaebd19fbd0fea9c06a359e3efaf54c2).
The files under `web/src/emu-core/` were taken unmodified from upstream revision
`eb90c33cfaebd19fbd0fea9c06a359e3efaf54c2`. The last update to the checked-in
WASM binary at that revision was `9bb1ec11d68012955657a92db68355cf142e6280`.
Use upstream's `core/` sources to inspect the engine; it is the Rust backend,
separate from upstream's CEmu adapter.

| File | SHA-256 |
| --- | --- |
| `emu_core.js` | `ea63afd66e901cbdd58c3f730f78d9ddf9807fa7b0e43ed357bf143eb43e4f47` |
| `emu_core_bg.wasm` | `991a54c446c5b1a9dcfc5b98a289421464c5e9811103c569e20dd58798b2ef65` |

Notices: [ti84ce](LICENSE-ti84ce.txt), [wasm-bindgen](LICENSE-wasm-bindgen.txt),
and [console_error_panic_hook](LICENSE-console-error-panic-hook.txt).

No TI firmware, upstream demo ROM, ROM download logic, CEmu build, or faceplate
artwork is shipped. The site only accepts a user's local 4 MiB CE ROM image,
keeps it in memory for the session, and does not send it anywhere. A file
passing the size and basic content checks does not guarantee it can boot.
Serve this directory over HTTP(S) so the browser can load its same-origin
ES module and WebAssembly file.
