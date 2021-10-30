import { assert } from 'chai';
import { github } from '../../entry';
import { mockAPI, unMockAPI } from '../../mock/GitHub';
import seedRepositories from '../../mock/seeds/repositories.json';
import Test from '../../Test';

const [ noConf ] = seedRepositories;

const factory = new Test();

suite('Github: Onboarding');

before(async function () {
    mockAPI();
    await factory.setTmpFolder();
    await factory.prepareRepositories([ noConf.repository ]);
});

test('Repo without config', async function () {
    const repo = await github.getRepo(`${noConf.owner}/${noConf.repository}`);
    const result = await repo.analize();

    assert.equal(result.constructor.name, 'ONBOARDING_PR_OPEN');
});

after(function () {
    unMockAPI();
});
