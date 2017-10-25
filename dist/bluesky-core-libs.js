"use strict";
var bluesky;
(function (bluesky) {
    var core;
    (function (core) {
        var resource;
        (function (resource) {
            var account;
            (function (account) {
                var primaryGroup;
                (function (primaryGroup) {
                    var EndpointTypeEnum = bluesky.core.model.clientConfig.EndpointTypeEnum;
                    var PrimaryGroupAccountResource = /** @class */ (function () {
                        /* @ngInject */
                        PrimaryGroupAccountResource.$inject = ["blueskyHttpWrapper"];
                        function PrimaryGroupAccountResource(blueskyHttpWrapper) {
                            this.blueskyHttpWrapper = blueskyHttpWrapper;
                        }
                        //#endregion
                        //#region methods
                        PrimaryGroupAccountResource.prototype.getPrimaryGroup = function (uid) {
                            return this.blueskyHttpWrapper.get('primary-group-account/' + encodeURIComponent(uid), { endpointType: EndpointTypeEnum.CoreApi });
                        };
                        return PrimaryGroupAccountResource;
                    }());
                    primaryGroup.PrimaryGroupAccountResource = PrimaryGroupAccountResource;
                    angular.module('bluesky.core.resource.account.primaryGroup', ['bluesky.httpWrapper'])
                        .service('primaryGroupAccountResource', PrimaryGroupAccountResource);
                })(primaryGroup = account.primaryGroup || (account.primaryGroup = {}));
            })(account = resource.account || (resource.account = {}));
        })(resource = core.resource || (core.resource = {}));
    })(core = bluesky.core || (bluesky.core = {}));
})(bluesky || (bluesky = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsdWVza3ktY29yZS1saWJzLmpzIiwicmVzb3VyY2UvY3VzdG9tZXItYWNjb3VudC9wcmltYXJ5LWdyb3VwLnJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQ0EsSUFBVTtBQUFWLENBQUEsVUFBVSxTQUFPO0lBQUMsSUFBQTtJQUFBLENBQUEsVUFBQSxNQUFJO1FBQUMsSUFBQTtRQUFBLENBQUEsVUFBQSxVQUFRO1lBQUMsSUFBQTtZQUFBLENBQUEsVUFBQSxTQUFPO2dCQUFDLElBQUE7Z0JBQUEsQ0FBQSxVQUFBLGNBQVk7b0JBR2hELElBQU8sbUJBQW1CLFFBQVEsS0FBSyxNQUFNLGFBQWE7b0JBTzFELElBQUEsNkNBQUEsWUFBQTs7O3dCQUdJLFNBQUEsNEJBQW9CLG9CQUF1Qzs0QkFBdkMsS0FBQSxxQkFBQTs7Ozt3QkFRcEIsNEJBQUEsVUFBQSxrQkFBQSxVQUFnQixLQUFXOzRCQUN2QixPQUFPLEtBQUssbUJBQW1CLElBQUksMkJBQTJCLG1CQUFtQixNQUFNLEVBQUUsY0FBYyxpQkFBaUI7O3dCQUloSSxPQUFBOztvQkFoQmEsYUFBQSw4QkFBMkI7b0JBa0J4QyxRQUFRLE9BQU8sOENBQThDLENBQUM7eUJBQ3pELFFBQVEsK0JBQStCO21CQTdCUixlQUFBLFFBQUEsaUJBQUEsUUFBQSxlQUFZO2VBQXBCLFVBQUEsU0FBQSxZQUFBLFNBQUEsVUFBTztXQUFoQixXQUFBLEtBQUEsYUFBQSxLQUFBLFdBQVE7T0FBYixPQUFBLFFBQUEsU0FBQSxRQUFBLE9BQUk7R0FBWixZQUFBLFVBQU87QUQrQmpCIiwiZmlsZSI6ImJsdWVza3ktY29yZS1saWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgYmx1ZXNreTtcbihmdW5jdGlvbiAoYmx1ZXNreSkge1xuICAgIHZhciBjb3JlO1xuICAgIChmdW5jdGlvbiAoY29yZSkge1xuICAgICAgICB2YXIgcmVzb3VyY2U7XG4gICAgICAgIChmdW5jdGlvbiAocmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHZhciBhY2NvdW50O1xuICAgICAgICAgICAgKGZ1bmN0aW9uIChhY2NvdW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHByaW1hcnlHcm91cDtcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKHByaW1hcnlHcm91cCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgRW5kcG9pbnRUeXBlRW51bSA9IGJsdWVza3kuY29yZS5tb2RlbC5jbGllbnRDb25maWcuRW5kcG9pbnRUeXBlRW51bTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFByaW1hcnlHcm91cEFjY291bnRSZXNvdXJjZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEBuZ0luamVjdCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gUHJpbWFyeUdyb3VwQWNjb3VudFJlc291cmNlKGJsdWVza3lIdHRwV3JhcHBlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmx1ZXNreUh0dHBXcmFwcGVyID0gYmx1ZXNreUh0dHBXcmFwcGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyNyZWdpb24gbWV0aG9kc1xuICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWFyeUdyb3VwQWNjb3VudFJlc291cmNlLnByb3RvdHlwZS5nZXRQcmltYXJ5R3JvdXAgPSBmdW5jdGlvbiAodWlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmx1ZXNreUh0dHBXcmFwcGVyLmdldCgncHJpbWFyeS1ncm91cC1hY2NvdW50LycgKyBlbmNvZGVVUklDb21wb25lbnQodWlkKSwgeyBlbmRwb2ludFR5cGU6IEVuZHBvaW50VHlwZUVudW0uQ29yZUFwaSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJpbWFyeUdyb3VwQWNjb3VudFJlc291cmNlO1xuICAgICAgICAgICAgICAgICAgICB9KCkpO1xuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5R3JvdXAuUHJpbWFyeUdyb3VwQWNjb3VudFJlc291cmNlID0gUHJpbWFyeUdyb3VwQWNjb3VudFJlc291cmNlO1xuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLm1vZHVsZSgnYmx1ZXNreS5jb3JlLnJlc291cmNlLmFjY291bnQucHJpbWFyeUdyb3VwJywgWydibHVlc2t5Lmh0dHBXcmFwcGVyJ10pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VydmljZSgncHJpbWFyeUdyb3VwQWNjb3VudFJlc291cmNlJywgUHJpbWFyeUdyb3VwQWNjb3VudFJlc291cmNlKTtcbiAgICAgICAgICAgICAgICB9KShwcmltYXJ5R3JvdXAgPSBhY2NvdW50LnByaW1hcnlHcm91cCB8fCAoYWNjb3VudC5wcmltYXJ5R3JvdXAgPSB7fSkpO1xuICAgICAgICAgICAgfSkoYWNjb3VudCA9IHJlc291cmNlLmFjY291bnQgfHwgKHJlc291cmNlLmFjY291bnQgPSB7fSkpO1xuICAgICAgICB9KShyZXNvdXJjZSA9IGNvcmUucmVzb3VyY2UgfHwgKGNvcmUucmVzb3VyY2UgPSB7fSkpO1xuICAgIH0pKGNvcmUgPSBibHVlc2t5LmNvcmUgfHwgKGJsdWVza3kuY29yZSA9IHt9KSk7XG59KShibHVlc2t5IHx8IChibHVlc2t5ID0ge30pKTtcbiIsIlxyXG5uYW1lc3BhY2UgYmx1ZXNreS5jb3JlLnJlc291cmNlLmFjY291bnQucHJpbWFyeUdyb3VwIHtcclxuXHJcbiAgICBpbXBvcnQgSUJsdWVza3lIdHRwV3JhcHBlciA9IGJsdWVza3kuY29yZS5zZXJ2aWNlLklCbHVlc2t5SHR0cFdyYXBwZXI7XHJcbiAgICBpbXBvcnQgRW5kcG9pbnRUeXBlRW51bSA9IGJsdWVza3kuY29yZS5tb2RlbC5jbGllbnRDb25maWcuRW5kcG9pbnRUeXBlRW51bTtcclxuICAgIGltcG9ydCBJUHJpbWFyeUdyb3VwRHRvID0gYmx1ZXNreS5jb3JlLm1vZGVsLmFjY291bnQuSVByaW1hcnlHcm91cER0bztcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElQcmltYXJ5R3JvdXBBY2NvdW50UmVzb3VyY2Uge1xyXG4gICAgICAgIGdldFByaW1hcnlHcm91cCh1aWQ6IHN0cmluZyk6IG5nLklQcm9taXNlPElQcmltYXJ5R3JvdXBEdG8+O1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBQcmltYXJ5R3JvdXBBY2NvdW50UmVzb3VyY2UgaW1wbGVtZW50cyBJUHJpbWFyeUdyb3VwQWNjb3VudFJlc291cmNlIHtcclxuXHJcbiAgICAgICAgLyogQG5nSW5qZWN0ICovXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBibHVlc2t5SHR0cFdyYXBwZXI6IElCbHVlc2t5SHR0cFdyYXBwZXIpIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAgICAgLy8jcmVnaW9uIG1ldGhvZHNcclxuXHJcbiAgICAgICAgZ2V0UHJpbWFyeUdyb3VwKHVpZDogc3RyaW5nKTogbmcuSVByb21pc2U8SVByaW1hcnlHcm91cER0bz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ibHVlc2t5SHR0cFdyYXBwZXIuZ2V0KCdwcmltYXJ5LWdyb3VwLWFjY291bnQvJyArIGVuY29kZVVSSUNvbXBvbmVudCh1aWQpLCB7IGVuZHBvaW50VHlwZTogRW5kcG9pbnRUeXBlRW51bS5Db3JlQXBpIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8jZW5kcmVnaW9uXHJcbiAgICB9XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2JsdWVza3kuY29yZS5yZXNvdXJjZS5hY2NvdW50LnByaW1hcnlHcm91cCcsIFsnYmx1ZXNreS5odHRwV3JhcHBlciddKVxyXG4gICAgICAgIC5zZXJ2aWNlKCdwcmltYXJ5R3JvdXBBY2NvdW50UmVzb3VyY2UnLCBQcmltYXJ5R3JvdXBBY2NvdW50UmVzb3VyY2UpO1xyXG5cclxufSJdfQ==
