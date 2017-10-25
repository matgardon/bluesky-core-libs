/// <reference types="angular" />
declare namespace bluesky.core.resource.account.primaryGroup {
    import IBlueskyHttpWrapper = bluesky.core.service.IBlueskyHttpWrapper;
    import IPrimaryGroupDto = bluesky.core.model.account.IPrimaryGroupDto;
    interface IPrimaryGroupAccountResource {
        getPrimaryGroup(uid: string): ng.IPromise<IPrimaryGroupDto>;
    }
    class PrimaryGroupAccountResource implements IPrimaryGroupAccountResource {
        private blueskyHttpWrapper;
        constructor(blueskyHttpWrapper: IBlueskyHttpWrapper);
        getPrimaryGroup(uid: string): ng.IPromise<IPrimaryGroupDto>;
    }
}
