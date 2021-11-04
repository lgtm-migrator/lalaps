import BaseResult from '../BaseResult';

class RepoResults extends BaseResult {}

export class VALID_CONFIG extends RepoResults {}
export class INVALID_CONFIG extends RepoResults {}
export class CONFIG_NOT_FOUND extends RepoResults {}
