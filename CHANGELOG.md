# [1.6.0](https://github.com/pustovitDmytro/lalaps/compare/v1.5.1...v1.6.0) (2021-11-05)


### Fix

* handle NO_ADVISORY_FOUND when no pr present ([99ade04](https://github.com/pustovitDmytro/lalaps/commit/99ade047d63d1b82f1fba89be0cb9309913cde71))
* keep PATH env in execa call ([4785997](https://github.com/pustovitDmytro/lalaps/commit/478599721d5147231ab64dba76412e3c027e00b8))
* not extend the environment variables in npm audit ([a2dbcaa](https://github.com/pustovitDmytro/lalaps/commit/a2dbcaa8af3e799916997254767da708efa6242e))

### New

* additional logs for second attempts ([f1eee3c](https://github.com/pustovitDmytro/lalaps/commit/f1eee3cffa69fbf5201818e18366e6397358eeac))

## [1.5.1](https://github.com/pustovitDmytro/lalaps/compare/v1.5.0...v1.5.1) (2021-11-04)


### Fix

* reset repo between advisories ([0fe2b34](https://github.com/pustovitDmytro/lalaps/commit/0fe2b34b16cc89d090b331ce2aca05d35233b510))

# [1.5.0](https://github.com/pustovitDmytro/lalaps/compare/v1.4.2...v1.5.0) (2021-11-04)


### New

* recognize only mine PRs ([b80168e](https://github.com/pustovitDmytro/lalaps/commit/b80168e4197587e22426d07d5f99c5277915d1c1))

## [1.4.2](https://github.com/pustovitDmytro/lalaps/compare/v1.4.1...v1.4.2) (2021-11-04)


### Fix

* drop maintainer_can_modify from update PR ([dde2d48](https://github.com/pustovitDmytro/lalaps/commit/dde2d485229e76e717b85e4ebdcaa912fee20379))

## [1.4.1](https://github.com/pustovitDmytro/lalaps/compare/v1.4.0...v1.4.1) (2021-11-04)


### Chore

* ignore repo api from debt check ([11539be](https://github.com/pustovitDmytro/lalaps/commit/11539bea9248640a399bf79de5624ce23fd355c1))

### Fix

* adds describe advisory results ([899f525](https://github.com/pustovitDmytro/lalaps/commit/899f525e6330248286b2d750b15ef4615e194d32))

# [1.4.0](https://github.com/pustovitDmytro/lalaps/compare/v1.3.0...v1.4.0) (2021-11-04)


### New

* handle multiple simultenious rules ([cc382c9](https://github.com/pustovitDmytro/lalaps/commit/cc382c978feb92ba0c5030d31ace975161adbf50))
* refresh concurent PR's ([c81eff0](https://github.com/pustovitDmytro/lalaps/commit/c81eff0dc577edd1c614d0d65b9ac10c2dc841fb))

# [1.3.0](https://github.com/pustovitDmytro/lalaps/compare/v1.2.0...v1.3.0) (2021-11-03)


### New

* adds info route ([dfc097d](https://github.com/pustovitDmytro/lalaps/commit/dfc097dfcefd3e7c10fb241dc029d7d28126c361))

# [1.2.0](https://github.com/pustovitDmytro/lalaps/compare/v1.1.0...v1.2.0) (2021-11-03)


### Chore

* adds redis to circle-ci ([79dc924](https://github.com/pustovitDmytro/lalaps/commit/79dc924873e27887074ef4b4b1eed7326c678a5b))
* adds tests for workers ([08b101e](https://github.com/pustovitDmytro/lalaps/commit/08b101ee859b5bd758093f56c2c6f784be0dad81))

### New

* adds tests for bull board ([18f062a](https://github.com/pustovitDmytro/lalaps/commit/18f062a45d1678cff1764c334aa6fee6c9dbf331))

# [1.1.0](https://github.com/pustovitDmytro/lalaps/compare/v1.0.1...v1.1.0) (2021-11-02)


### Fix

* change default expire limits to match github requirements ([d07420e](https://github.com/pustovitDmytro/lalaps/commit/d07420e9cc335d2af37215fe2ce1c322de5abc76))
* fixes platform-analize log ([8ee16d1](https://github.com/pustovitDmytro/lalaps/commit/8ee16d16557dc757db285d03948c39eb542b68f2))

### New

* adds Lalaps email ([fff3bcb](https://github.com/pustovitDmytro/lalaps/commit/fff3bcb6578b3bc9508cf66b6352325e6b82d542))

## [1.0.1](https://github.com/pustovitDmytro/lalaps/compare/v1.0.0...v1.0.1) (2021-11-01)


### Chore

* adds autodeploy to heroku ([7e83d5a](https://github.com/pustovitDmytro/lalaps/commit/7e83d5ae09a322533cd564b7df271069af8351fc))

### Fix

* refresh github token ([9854d42](https://github.com/pustovitDmytro/lalaps/commit/9854d42906fd96a9a1ba55f47a7a61d0c634bf06))

# 1.0.0 (2021-11-01)


### Chore

* 'Chore' semanticCommitType for updating devDependencies ([4bf79e1](https://github.com/pustovitDmytro/lalaps/commit/4bf79e1ac2907ca07a355f63458b8bf3b41a3afc))
* (git) Add logs to gitignore ([d4d2077](https://github.com/pustovitDmytro/lalaps/commit/d4d20770877eae7158ec33c45da90645f74dbbec))
* (refactor) remove unused argument ([6f28b59](https://github.com/pustovitDmytro/lalaps/commit/6f28b59cefcbae9e6ba3b25eea2a65980daa1d84))
* (test) helper packages for tests ([e195b58](https://github.com/pustovitDmytro/lalaps/commit/e195b58230b5b54084585c7a815830ca563c8a66))
* (test) working with tmp dir for test factory ([cfeafbc](https://github.com/pustovitDmytro/lalaps/commit/cfeafbc005cad29219d01f4338ef0ecfe7c9ad19))
* (tests) clearCache on module load is optional ([96c2ae5](https://github.com/pustovitDmytro/lalaps/commit/96c2ae5237b7eed47278471cbf3b04b2b99385d4))
* (tests) moves load to factory ([4acb941](https://github.com/pustovitDmytro/lalaps/commit/4acb94181777f22e8fda16ea43b6a1cad3986629))
* additional quotes in glob pattern ([f6d15cf](https://github.com/pustovitDmytro/lalaps/commit/f6d15cf2b6fc966f1b3a8b175b6bcf0144a80def))
* adds  a security policy ([ed86aba](https://github.com/pustovitDmytro/lalaps/commit/ed86aba2326eab4d7ef6045913a06b8e80b73dce))
* adds 'typo' PR template ([e20404d](https://github.com/pustovitDmytro/lalaps/commit/e20404d5f844e87f38558d6986e31df4c214fc3f))
* adds appveyor ([d560b4e](https://github.com/pustovitDmytro/lalaps/commit/d560b4ee54ffb8d4d267fd2cb132ba8bb6dfe5b9))
* adds bump strategy for devDependencies (non-major) ([03c9587](https://github.com/pustovitDmytro/lalaps/commit/03c958728c482d04225d3368aebae8fadc7d6a4d))
* adds CIRCLE_SKIP_DEPLOY variable ([231549d](https://github.com/pustovitDmytro/lalaps/commit/231549dda35992edbe9732a2848ce6485994214c))
* adds circle-ci conditions ([5a40980](https://github.com/pustovitDmytro/lalaps/commit/5a4098019c0450476f15cee293424d0ddcfb298c))
* adds CODE_OF_CONDUCT ([a969a8d](https://github.com/pustovitDmytro/lalaps/commit/a969a8d7c4b9ea8552ef90d21d1cbef068c9ee4c))
* adds commitlint ([38ded63](https://github.com/pustovitDmytro/lalaps/commit/38ded63eb2a1a8e71b9a437d8b784a88dac47543))
* adds danger to circle-ci ([ae48ac3](https://github.com/pustovitDmytro/lalaps/commit/ae48ac3120c89603fd452b79bc9245e65fdf56c9))
* adds danger to validate pr ([7fb7040](https://github.com/pustovitDmytro/lalaps/commit/7fb7040e3b4daa8fc1b419aa88e08118fb43497d))
* adds danger token to circle ([82f4156](https://github.com/pustovitDmytro/lalaps/commit/82f4156f972af35775e72f9fca4c0ff374e5364b))
* adds dangerfile to npm ignore ([8842c70](https://github.com/pustovitDmytro/lalaps/commit/8842c70cad5ba463b996988d8928c58dbea1fa2f))
* adds dummy line to calc coverage ([800de67](https://github.com/pustovitDmytro/lalaps/commit/800de67b17a2a5899c2a43d9d16ea0f3774ed642))
* adds empty line to pr comment ([36d8a09](https://github.com/pustovitDmytro/lalaps/commit/36d8a0977895e3236213a5c1091fd4c0af3107b4))
* adds FULL_FIX test ([995d546](https://github.com/pustovitDmytro/lalaps/commit/995d546bfa1d778df651b77006bca43909bf6b9d))
* adds github tests ([2ec5e96](https://github.com/pustovitDmytro/lalaps/commit/2ec5e9615c4f319ad3b6733816d451da6f200532))
* adds gitleaks to circle pipeline ([114946e](https://github.com/pustovitDmytro/lalaps/commit/114946e5b0a0ec0437929c5963e7efe258391b9e))
* adds jscpd to ignore ([8520cea](https://github.com/pustovitDmytro/lalaps/commit/8520ceadd2d75a90e44f94c6351ebdafc4ef9944))
* adds lock file lint ([f5a4679](https://github.com/pustovitDmytro/lalaps/commit/f5a467979d6cbb3fa21797fe063deb99c2e6e6d0))
* adds pr context ([ce163d9](https://github.com/pustovitDmytro/lalaps/commit/ce163d98af7e779af2242418b9d4fe18deeffb36))
* adds sonarcloud config ([c92973d](https://github.com/pustovitDmytro/lalaps/commit/c92973d998ecee059594fbcdd35b9be0c08ffd0b))
* adds sponsorships ([35ed8e0](https://github.com/pustovitDmytro/lalaps/commit/35ed8e0ddac94bdc52545be1d533be48495c8d60))
* adds stabilityDays to renovate ([3b262bc](https://github.com/pustovitDmytro/lalaps/commit/3b262bcefc6db318d2a7d9103f9f5f42315202d5))
* adds target branch to semantic release ([c4fb3f1](https://github.com/pustovitDmytro/lalaps/commit/c4fb3f1b9ec25425f49b3fd0a17cf68f64429fb4))
* adds technical dept check ([e16a8e2](https://github.com/pustovitDmytro/lalaps/commit/e16a8e2880d894ed0ca6f6125b7be61a90a15768))
* adds test-results to circle-ci ([767c5b3](https://github.com/pustovitDmytro/lalaps/commit/767c5b348a5fe8747604355cf7342fa65b6e3fe3))
* adds tests for packing process ([9b9602d](https://github.com/pustovitDmytro/lalaps/commit/9b9602d2d5e9d869a6555437355325c703ccfb5b))
* adds tests for prior node versions ([4b00012](https://github.com/pustovitDmytro/lalaps/commit/4b000127879722533f57155ba97adba6a0c04e8d))
* adds trusted bots to danger ([892f4a1](https://github.com/pustovitDmytro/lalaps/commit/892f4a12a0084464da137d25b1a027e4afb808bd))
* adds whitesorce bolt bot ([0888eee](https://github.com/pustovitDmytro/lalaps/commit/0888eee49d490c03a2d773287f1270e8a617d8ca))
* change extention of test files to .test.js ([d84ac03](https://github.com/pustovitDmytro/lalaps/commit/d84ac0310ce9f503c9ec05be742f73e2764a1651))
* change renovate schedule ([b983eab](https://github.com/pustovitDmytro/lalaps/commit/b983eab7c9bf231bcd38b95d74adbd2e0b519d7c))
* change tgz label ([5e0e512](https://github.com/pustovitDmytro/lalaps/commit/5e0e51223c0069915e559de8a55a18696254f8fd))
* combine mine packages in renovate updates ([54c97b8](https://github.com/pustovitDmytro/lalaps/commit/54c97b8debfe5eae07fe83947378d03eaaea5763))
* contributor login in danger message ([76349e6](https://github.com/pustovitDmytro/lalaps/commit/76349e6ee87b0e59f8fff9402eb10fa66d23a188))
* corrected extglob matching ([72a2201](https://github.com/pustovitDmytro/lalaps/commit/72a22018f8e9875de4194821361602cc432a32b1))
* corrected pack pattern ([273497a](https://github.com/pustovitDmytro/lalaps/commit/273497a050e075200512db9033ee2fe9d973a5f4))
* create auto pr for major dependencies ([d2583a6](https://github.com/pustovitDmytro/lalaps/commit/d2583a6277808bbd2aa5ec69dbd1639c10458c9a))
* deploy ci as single command ([96c2800](https://github.com/pustovitDmytro/lalaps/commit/96c280048128a9879c48d11d3b49b1f3ef60ca77))
* deploy in circle-ci ([a62a5f2](https://github.com/pustovitDmytro/lalaps/commit/a62a5f27f010c0fb083ea73c61979a42996453ac))
* disable build for coverage check ([0b6e984](https://github.com/pustovitDmytro/lalaps/commit/0b6e9847587f281e0b350bb4f9b6d0d498b4ac82))
* dont pin devDeps in renovate ([5fb0e8d](https://github.com/pustovitDmytro/lalaps/commit/5fb0e8d473117724b74286f57ee1d0281dcb82cb))
* dont store package-tests artifacts ([50ebff1](https://github.com/pustovitDmytro/lalaps/commit/50ebff16449ff34f474587136dca4e4740ed4bf7))
* drop semantic-release preinstalled plugins ([69b1950](https://github.com/pustovitDmytro/lalaps/commit/69b19507f23c5ca54a97d596ac3c35329d9945d8))
* enhance own updates commit messages ([49a2365](https://github.com/pustovitDmytro/lalaps/commit/49a2365c0a49363e42365503939b98819a6c1864))
* exit code 0 when skip ([f6ee0bf](https://github.com/pustovitDmytro/lalaps/commit/f6ee0bf8f6965f884165f1ebcf83c9ca9a19bb28))
* export default in tests ([9d210e6](https://github.com/pustovitDmytro/lalaps/commit/9d210e6f511a42a9c42f415ba6a64834346c11b0))
* fill test entry with template ([9177859](https://github.com/pustovitDmytro/lalaps/commit/91778596117f64bde00feeda72b0f7b5dbf7b592))
* fix json in renovate ([8ad7928](https://github.com/pustovitDmytro/lalaps/commit/8ad792825b2703e3159b65faf722eb43a1d9d421))
* fixes audit ([14597ff](https://github.com/pustovitDmytro/lalaps/commit/14597ffa2ac256fdd24954569623ae9cf96e3bce))
* fixes audit [devDependencies] ([d08b1fc](https://github.com/pustovitDmytro/lalaps/commit/d08b1fc075b7eef59c59f755e1ee96748824e415))
* fixes Breaking increment in semantic-release ([d1c4d53](https://github.com/pustovitDmytro/lalaps/commit/d1c4d5314eb9921111d4e033ae59e1495e842fa3))
* fixes ci ([0576a01](https://github.com/pustovitDmytro/lalaps/commit/0576a013f537d21591b13214c3cf2c1cf33bfa79))
* Fixes danger-pr in circe-ci ([adff8b3](https://github.com/pustovitDmytro/lalaps/commit/adff8b366b2dc50b880f3d5dedaa05bc8cd9152d))
* fixes debt typo in travis job ([f9fd463](https://github.com/pustovitDmytro/lalaps/commit/f9fd4631aa300e16128a4d7107d45f9317f70c9b))
* fixes later schedule ([a0cfb5c](https://github.com/pustovitDmytro/lalaps/commit/a0cfb5cbb1ca216b4a58bb8c644dc20359ae21b3))
* fixes lint ([9c23ea3](https://github.com/pustovitDmytro/lalaps/commit/9c23ea397f70f001672420d4440e10dd8e55c005))
* fixes lint ([11c8dcd](https://github.com/pustovitDmytro/lalaps/commit/11c8dcd9bebbec09a394f4dcd3190c2e0a08ae99))
* fixes npm  audit ([c3beccd](https://github.com/pustovitDmytro/lalaps/commit/c3beccdf1926d72dcf9b13cd153e37916f1a8d13))
* fixes package process ([364e26b](https://github.com/pustovitDmytro/lalaps/commit/364e26b379e6cd94b89776aa0a41abd10a5dc43a))
* fixes package-tests ([e761b0d](https://github.com/pustovitDmytro/lalaps/commit/e761b0d98d3915c1d76c4b29f38399aecb0d9ede))
* fixes prevent require handler ([7923f0e](https://github.com/pustovitDmytro/lalaps/commit/7923f0ed71ba537d7c50064a99e2e9af318fcb60))
* fixes renovate config ([982abaf](https://github.com/pustovitDmytro/lalaps/commit/982abaf61a98de14dadc2fcb8b37b854577cbc64))
* fixes renovate config ([05c5bc5](https://github.com/pustovitDmytro/lalaps/commit/05c5bc5a6d90da713d245663319d34cf6519df1f))
* fixes spellcheck in bugreport ([7d754b6](https://github.com/pustovitDmytro/lalaps/commit/7d754b605ed7fed3ea1a9c7d0d951a09806a1c37))
* ignoring all for npm packaging ([409201a](https://github.com/pustovitDmytro/lalaps/commit/409201abede4ee9458a430a491c7471a525e976a))
* integrate APPVEYOR_BUILD_ID to build tests ([16cdd48](https://github.com/pustovitDmytro/lalaps/commit/16cdd48ddb7da5000c6df88ceb1f2513225a4a5b))
* integrate fossa ([b65e961](https://github.com/pustovitDmytro/lalaps/commit/b65e961a5ae500b1b5fd12fce3436e71c1518e35))
* integrate node-package-tester ([9d53bf3](https://github.com/pustovitDmytro/lalaps/commit/9d53bf30d295368e7f1e925c18b00e48cc16014e))
* intermidiate log for config ([88f6e72](https://github.com/pustovitDmytro/lalaps/commit/88f6e72cf884d542d1ea4cddb89299ed7a5e0f06))
* inverse logical condition ([65dd0ad](https://github.com/pustovitDmytro/lalaps/commit/65dd0ad91e442702ae98993f21163d26270cd4ec))
* Lock file maintenance ([29fe760](https://github.com/pustovitDmytro/lalaps/commit/29fe76014232a02ab882c7b0f64c87138cc1999a))
* Lock file maintenance ([9892cc5](https://github.com/pustovitDmytro/lalaps/commit/9892cc51c4e0d99e41ce06568482891d30c78e70))
* Lock file maintenance ([98e62b3](https://github.com/pustovitDmytro/lalaps/commit/98e62b366b572d5154a2b409bda203c4ffa7d62e))
* Lock file maintenance ([7af4484](https://github.com/pustovitDmytro/lalaps/commit/7af448441cafbebb04557cf657a21e7e9faab355))
* Lock file maintenance ([1ffc991](https://github.com/pustovitDmytro/lalaps/commit/1ffc991529c6f05ea965e9217c215fad4fab2e59))
* Lock file maintenance ([47bfacf](https://github.com/pustovitDmytro/lalaps/commit/47bfacf4e2ffe672c96345481ddfa6811d4d4d69))
* Lock file maintenance ([19c2389](https://github.com/pustovitDmytro/lalaps/commit/19c23891056afb813e4dde92e7f40f0905896bc9))
* Lock file maintenance ([2b00aec](https://github.com/pustovitDmytro/lalaps/commit/2b00aec84097bd21c51a43ab785225798753dbae))
* Lock file maintenance ([dea06c9](https://github.com/pustovitDmytro/lalaps/commit/dea06c9d3e2dd4448e997ee081425b1a765fae87))
* Lock file maintenance ([e0043d8](https://github.com/pustovitDmytro/lalaps/commit/e0043d89de5576939e701f567ab1a871c2c8a057))
* Lock file maintenance ([5d305a8](https://github.com/pustovitDmytro/lalaps/commit/5d305a8337cccbb1efcb4885805960941f40b143))
* Lock file maintenance ([cdf4f11](https://github.com/pustovitDmytro/lalaps/commit/cdf4f112eebab895c624210cc672ab00ba2fa443))
* Lock file maintenance ([3291a21](https://github.com/pustovitDmytro/lalaps/commit/3291a2144ee143dc327f6fb4a8b82e62e07b1c1f))
* multi os tests for travis ([7c8ce28](https://github.com/pustovitDmytro/lalaps/commit/7c8ce28437898910ea7fbf8151a3de346431c482))
* not allow to fail on node 16 ([22ed683](https://github.com/pustovitDmytro/lalaps/commit/22ed683ace773b242382c094b363a1713f9d8352))
* not fail package if no tmp exists ([5693813](https://github.com/pustovitDmytro/lalaps/commit/569381326c9b688c492aa29c825a61901419d1de))
* package-tester improvements ([d5d868b](https://github.com/pustovitDmytro/lalaps/commit/d5d868bc7f529d94f79041be5b923b5967d7a704))
* prevent package:test from using devdependencies ([dc896f3](https://github.com/pustovitDmytro/lalaps/commit/dc896f39fd79e6cb73c8cc458213c00f5f5a703d))
* refactor worker runners ([6d7b0f8](https://github.com/pustovitDmytro/lalaps/commit/6d7b0f89d12327a9d3a01a35b09a0dda0b11f1be))
* removes unused devDependencies ([ddb100a](https://github.com/pustovitDmytro/lalaps/commit/ddb100aa634ab2e1d2695de73d9aeb4a7795ccce))
* run pr workflow only for pull requests ([03e0b08](https://github.com/pustovitDmytro/lalaps/commit/03e0b0880da9166c7a19fbf6ba171be65af6cbb5))
* set myself as default assignee in pr ([0dcd0ce](https://github.com/pustovitDmytro/lalaps/commit/0dcd0ce95b50a1e8a2fef91307f7fd8964314f68))
* set YARGS_MIN_NODE_VERSION 10 ([9b6bef9](https://github.com/pustovitDmytro/lalaps/commit/9b6bef9d89f8f0c958ee1fe60f20475dd20c8276))
* Skip gitleaks checks for test variables ([73254d2](https://github.com/pustovitDmytro/lalaps/commit/73254d25cbc06cd328803816d4ead5113b86a627))
* split circle ci jobs ([9f75a6b](https://github.com/pustovitDmytro/lalaps/commit/9f75a6b8c1f9002302b367c7a58f5d85f007cc5d))
* telegram notifications on release ([3a8036a](https://github.com/pustovitDmytro/lalaps/commit/3a8036a66d1ad82b978bbb356e0ac0cd1b1d1e46))
* test-security in separete ci job ([a4bd846](https://github.com/pustovitDmytro/lalaps/commit/a4bd846eefbe854e0b2a83adc80d2b4ab3aeedd5))
* test-security in separete ci job ([9559dbc](https://github.com/pustovitDmytro/lalaps/commit/9559dbc6afc7c3a3b269d18fea63018dbe8fb79c))
* tests/entry.js module resolving ([c840f8b](https://github.com/pustovitDmytro/lalaps/commit/c840f8b479234b7944b2d2708344ae24df231464))
* update .renovaterc to automerge after successfull checks ([2e76ceb](https://github.com/pustovitDmytro/lalaps/commit/2e76ceb3dfe909955ef9e4a964312d794d41c4a8))
* update default renovate rules ([7e83bc4](https://github.com/pustovitDmytro/lalaps/commit/7e83bc4fb9b99bb74811cd55db0b94c81e18dcde))
* Update dependency @rollup/plugin-commonjs to v19 ([bf29948](https://github.com/pustovitDmytro/lalaps/commit/bf2994851b033e64744e381f5f566ca9eed0aef5))
* Update dependency @rollup/plugin-node-resolve to v13 ([265fd82](https://github.com/pustovitDmytro/lalaps/commit/265fd82a61b0f2ee81bcb445f93e34f05bb4540b))
* Update dependency babel-plugin-module-resolver to v4 ([b8eb86f](https://github.com/pustovitDmytro/lalaps/commit/b8eb86f0d94bf8e81e2c9a37d64698aa9ccfebc5))
* Update dependency eslint to v7 ([0e79e0f](https://github.com/pustovitDmytro/lalaps/commit/0e79e0fa4b2ccb410fd5e6c4648d9280276aeba0))
* Update dependency eslint-plugin-regexp to ^0.12.0 ([51ff304](https://github.com/pustovitDmytro/lalaps/commit/51ff3049b892e9ee5655761e53454e4c601fba27))
* Update dependency eslint-plugin-regexp to ^0.13.0 (#36) ([3a8d3ec](https://github.com/pustovitDmytro/lalaps/commit/3a8d3ecefa7c49575b4c6de6832690117d852dd7)), closes [#36](https://github.com/pustovitDmytro/lalaps/issues/36)
* Update dependency eslint-plugin-sonarjs to ^0.9.0 ([81d9681](https://github.com/pustovitDmytro/lalaps/commit/81d9681ef601c70ee83a7ca26b199d647fc4ca0e))
* Update dependency eslint-plugin-unicorn to v33 ([bfa00ff](https://github.com/pustovitDmytro/lalaps/commit/bfa00ff354dfb9ffe717e9a36f7a938d44b32611))
* Update dependency eslint-plugin-unicorn to v34 (#34) ([86efbac](https://github.com/pustovitDmytro/lalaps/commit/86efbac96c6fbd1055c7e83fc3a42a861836b943)), closes [#34](https://github.com/pustovitDmytro/lalaps/issues/34)
* Update dependency fs-extra to v10 ([a0adecc](https://github.com/pustovitDmytro/lalaps/commit/a0adecc6b0b58e877bb64aff29e9a42bdc8a9d71))
* Update dependency glob-parent to 5.1.2 [SECURITY] ([c957512](https://github.com/pustovitDmytro/lalaps/commit/c957512cf496d9b99e2278b44b6bb9da545f57a8))
* Update dependency husky to v7 ([3578711](https://github.com/pustovitDmytro/lalaps/commit/35787117161955387aad52949d506c0fbaf42edf))
* Update dependency mocha to v8 ([627a45b](https://github.com/pustovitDmytro/lalaps/commit/627a45bd29e1b5fb1398f539633b54e76175563a))
* Update dependency mocha to v9 ([93b7a17](https://github.com/pustovitDmytro/lalaps/commit/93b7a1783ea97a7bcd94d570ef33b61314c93746))
* Update dependency nyc to v15 ([1caf199](https://github.com/pustovitDmytro/lalaps/commit/1caf199155baa1da46474ec231533a78865d6c19))
* Update dependency uuid to v8 ([ebae34b](https://github.com/pustovitDmytro/lalaps/commit/ebae34b9fc2a074d05600b0e6af2cf3279630508))
* Update devDependencies (non-major) ([a8cb7ff](https://github.com/pustovitDmytro/lalaps/commit/a8cb7ffbbf0aa4c032a019f12be0505ac5bb0165))
* Update devDependencies (non-major) ([c14bcf9](https://github.com/pustovitDmytro/lalaps/commit/c14bcf97d6790f0959105ddb583bdeadcfc90d07))
* Update devDependencies (non-major) ([609151a](https://github.com/pustovitDmytro/lalaps/commit/609151afd6bc58ff56003e33d85160cff9635b27))
* Update devDependencies (non-major) ([5b1a6c3](https://github.com/pustovitDmytro/lalaps/commit/5b1a6c36373cd90d68dbb19cea6b59b3985f1468))
* Update devDependencies (non-major) ([51200bf](https://github.com/pustovitDmytro/lalaps/commit/51200bf4f3ac07c957f6861fd819319a28710689))
* Update devDependencies (non-major) ([33211c3](https://github.com/pustovitDmytro/lalaps/commit/33211c31d168fc187eb028f92eaeeff48ccfd085))
* Update devDependencies (non-major) (#48) ([b3f6184](https://github.com/pustovitDmytro/lalaps/commit/b3f6184966d64e7a20a5176ddca6c63d1e275520)), closes [#48](https://github.com/pustovitDmytro/lalaps/issues/48)
* Update devDependencies (non-major) to v13 ([6894ad9](https://github.com/pustovitDmytro/lalaps/commit/6894ad97aeac91f931506c360822f81c861e2e83))
* update eslint ([6b174b1](https://github.com/pustovitDmytro/lalaps/commit/6b174b184a792fc282ef3228079f23fa81f2bcb5))
* update eslint ([4aac03c](https://github.com/pustovitDmytro/lalaps/commit/4aac03c8db5f28d1d41838fc70e614df93e034d6))
* update eslint-config-incredible ([2f39edb](https://github.com/pustovitDmytro/lalaps/commit/2f39edb6b44795918e8650be3e727b8e7abb61b7))
* update eslint-config-incredible ([58c31d2](https://github.com/pustovitDmytro/lalaps/commit/58c31d295fa2df7cb3dceda8db6a417144a4b1c3))
* Update issue templates ([8fdb1af](https://github.com/pustovitDmytro/lalaps/commit/8fdb1af8db2dbb2cd8912bef867d62b95781fc56))
* update lock file ([4ffb878](https://github.com/pustovitDmytro/lalaps/commit/4ffb878e544a8cbe68fa7b3c5908b8ccdf9e394f))
* Update pr template ([1d4eb34](https://github.com/pustovitDmytro/lalaps/commit/1d4eb34da6085757d1707db0c440c6e245c3e2e3))
* update semantic release rules ([a075dab](https://github.com/pustovitDmytro/lalaps/commit/a075dabcdd82773ce2d2170e03a3a847f6551c02))
* update semantic to use commit convention ([7e079b2](https://github.com/pustovitDmytro/lalaps/commit/7e079b2eaeb424f55b591b124b7f998a092c0988))
* Update semantic-release monorepo ([b7ab2b1](https://github.com/pustovitDmytro/lalaps/commit/b7ab2b1ad472bc6b20d34cdf527704b3c62ea57b))
* update travis badge ([e159104](https://github.com/pustovitDmytro/lalaps/commit/e1591042eba97c4b87c923a3a84053eca1e2da4d))
* updates semanticCommitType rule ([1a1d119](https://github.com/pustovitDmytro/lalaps/commit/1a1d119cd2c11b843e8d3a7e99eed85695b46df4))
* upgrade circle-ci to 2.1 ([fab79a9](https://github.com/pustovitDmytro/lalaps/commit/fab79a93b2ba07dd088d9d89024b24d5a21f2ac3))
* use danger for internall pr ([d838ede](https://github.com/pustovitDmytro/lalaps/commit/d838edef9a425510615b3405d49b8056176f23d8))
* use incredible eslint config ([b03d74a](https://github.com/pustovitDmytro/lalaps/commit/b03d74a4e8e9ee1dcecba72d2137d70dafbf8b73))
* use native tarball generation ([eeefda5](https://github.com/pustovitDmytro/lalaps/commit/eeefda5daa30eedd1af621c4a0c0efa32f0c9645))
* using static test entry ([21e5b7d](https://github.com/pustovitDmytro/lalaps/commit/21e5b7dbe05b69221d71f5e9cde845028f942209))

### Docs

* adds codefactor badge ([52a2a14](https://github.com/pustovitDmytro/lalaps/commit/52a2a141162707299ffe9106c748c113b1ddd0ab))
* adds Fossa badge ([60a6703](https://github.com/pustovitDmytro/lalaps/commit/60a67033da46b587902189d267d2da6ba011b41b))
* adds node releases roadmap ([ba16142](https://github.com/pustovitDmytro/lalaps/commit/ba16142230db2895ecd9855d5746648075f0b8e8))
* change travis badge to circle-ci ([ebabb61](https://github.com/pustovitDmytro/lalaps/commit/ebabb61f19ac4413561d3ffd849f9392f1c60bb5))
* changes size-url ([ecc2fc2](https://github.com/pustovitDmytro/lalaps/commit/ecc2fc29fa0ad2b353146d18fcf33747f5393230))
* fixes spellcheck ([bc06d85](https://github.com/pustovitDmytro/lalaps/commit/bc06d85a523a2977307c588ee6abe6152c66ef19))
* move Contributing Guidelines to separate file. ([081e4ed](https://github.com/pustovitDmytro/lalaps/commit/081e4ed03eebef0eda5305a1486a32cf91cdc62b))
* prettify modified_files as markdown list in pr ([6397f60](https://github.com/pustovitDmytro/lalaps/commit/6397f60597573cab04278c8b597b13cdb452773a))
* prettify modified_files list in pr ([ecce71a](https://github.com/pustovitDmytro/lalaps/commit/ecce71a2494382206f983c8370cdd9affbc341a7))
* removes ) from badge ([b986009](https://github.com/pustovitDmytro/lalaps/commit/b9860094fc98fdc00a049d81652d2c9f484ae73d))
* reorder badges ([ed6d250](https://github.com/pustovitDmytro/lalaps/commit/ed6d250fb5cc10c4599f2c50425bf50931d9d560))
* update badges ([ffe57a1](https://github.com/pustovitDmytro/lalaps/commit/ffe57a1289e40b9a10d7354276368253f90fc238))
* update snyk badge ([a7fbb1d](https://github.com/pustovitDmytro/lalaps/commit/a7fbb1d0e408bec8b8a8f37d1ffef3921d1dc106))
* update year in license ([1aa3c35](https://github.com/pustovitDmytro/lalaps/commit/1aa3c358528d22e9a8657fa78c41f4cbc9b7bb17))

### Fix

* adds missing modules ([fc14911](https://github.com/pustovitDmytro/lalaps/commit/fc1491119302e2f22ba6bc497d69812dcdd21493))
* drop force from utomergeable config ([9fe173e](https://github.com/pustovitDmytro/lalaps/commit/9fe173e2a11819b2c864608713e9341f0027d354))
* fixes basic auth ([742f534](https://github.com/pustovitDmytro/lalaps/commit/742f5340606bd6b15bacaa924ea95d71c542952a))
* fixes toPercentage multiplier ([feeb2f6](https://github.com/pustovitDmytro/lalaps/commit/feeb2f6d2b4643d0e99d00c6365d2589bbf5d822))
* fixes typo ([4f8ced4](https://github.com/pustovitDmytro/lalaps/commit/4f8ced4f6a9ba7559b68c94d0bcfcf30faa57e45))
* move fs-extra to dependencies ([2366bf1](https://github.com/pustovitDmytro/lalaps/commit/2366bf120fa968decbffe6214993445a02e5133b))
* rename port variable ([cc648b4](https://github.com/pustovitDmytro/lalaps/commit/cc648b4715d76eb45be398bfe686d7240b9f6b81))
* set babel target node version to 10 ([f736568](https://github.com/pustovitDmytro/lalaps/commit/f73656838a20d11da6680579cfccc24a9f4a1201))

### New

* add Licence ([2204db1](https://github.com/pustovitDmytro/lalaps/commit/2204db1c43f935dc0deb9eaa1671d7a5f64c1927))
* adds circle-ci ([4f55862](https://github.com/pustovitDmytro/lalaps/commit/4f558626db2d5d6c4aaa366c73a4c2a0cc05feb1))
* adds context to circle-ci ([a3a1f33](https://github.com/pustovitDmytro/lalaps/commit/a3a1f33a03d1c32b2d467cdce1d7ab3fb0b8ce8b))
* adds default redis user ([de5f037](https://github.com/pustovitDmytro/lalaps/commit/de5f037e0b197637a0a0a283f791d24d6888735d))
* adds git signature ([71b7687](https://github.com/pustovitDmytro/lalaps/commit/71b768717e438e0537783a3d49e05ceef666274c))
* adds gitea platform ([282f9d9](https://github.com/pustovitDmytro/lalaps/commit/282f9d95c6071793ce29b4e0979ef087fbc0c141))
* adds github platform ([54c9f47](https://github.com/pustovitDmytro/lalaps/commit/54c9f47d11316dd2950707e76a4fa0016f0ac384))
* adds heroku deploy ([c1a2c00](https://github.com/pustovitDmytro/lalaps/commit/c1a2c00d78bc94100447494ca098493332bf929a))
* adds npm advisory ([be9c480](https://github.com/pustovitDmytro/lalaps/commit/be9c480fdae4cb4b14882bc5b2ca19f3af570d49))
* adds Procfile ([a5834db](https://github.com/pustovitDmytro/lalaps/commit/a5834dbced271fdef10e2f8a4a739e8a69d6655a))
* adds queues ([28a80b8](https://github.com/pustovitDmytro/lalaps/commit/28a80b82cb7a520d695f2c39ecb68184c09e00c4))
* adds renovate ([1e32c02](https://github.com/pustovitDmytro/lalaps/commit/1e32c027a0c237f0af49a02317687d71fb3a8e76))
* Base Lalaps structure ([bc26784](https://github.com/pustovitDmytro/lalaps/commit/bc26784da7c679a92fd6b6df4de9335d0450f7d4))
* initialize npm boilerplate ([5f9269a](https://github.com/pustovitDmytro/lalaps/commit/5f9269add50e64f6e85568c4c932562ca713a7f6))
