
namespace bluesky.core.resource.account.primaryGroup {

    import IBlueskyHttpWrapper = bluesky.core.service.IBlueskyHttpWrapper;
    import EndpointTypeEnum = bluesky.core.model.clientConfig.EndpointTypeEnum;
    import IPrimaryGroupDto = bluesky.core.model.account.IPrimaryGroupDto;

    export interface IPrimaryGroupAccountResource {
        getPrimaryGroup(uid: string): ng.IPromise<IPrimaryGroupDto>;
    }

    export class PrimaryGroupAccountResource implements IPrimaryGroupAccountResource {

        /* @ngInject */
        constructor(private blueskyHttpWrapper: IBlueskyHttpWrapper) {

        }

        //#endregion

        //#region methods

        getPrimaryGroup(uid: string): ng.IPromise<IPrimaryGroupDto> {
            return this.blueskyHttpWrapper.get('primary-group-account/' + encodeURIComponent(uid), { endpointType: EndpointTypeEnum.CoreApi });
        }

        //#endregion
    }

    angular.module('bluesky.core.resource.account.primaryGroup', ['bluesky.httpWrapper'])
        .service('primaryGroupAccountResource', PrimaryGroupAccountResource);

}