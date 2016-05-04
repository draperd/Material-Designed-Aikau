/**
 * Copyright (C) 2005-2016 Alfresco Software Limited.
 *
 * This file is part of Alfresco
 *
 * Alfresco is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Alfresco is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * @module alfresco/experimental/mdl/Button
 * @extends module:alfresco/experimental/mdl/BaseMdlWidget
 * @author Dave Draper
 * @since 1.0.67
 */
define(["dojo/_base/declare",
        "alfresco/experimental/mdl/BaseMdlWidget", 
        "dojo/text!./templates/FabButton.html",
        "dijit/_OnDijitClickMixin",
        "alfresco/renderers/_PublishPayloadMixin"], 
        function(declare, BaseMdlWidget, template, _OnDijitClickMixin, _PublishPayloadMixin) {
   
   return declare([BaseMdlWidget, _OnDijitClickMixin, _PublishPayloadMixin], {

      /**
       * The HTML template to use for the widget.
       * @instance
       * @type {String}
       */
      templateString: template,

      /**
       * The button type
       *
       * @instance
       * @type {string}
       * @defualt
       */
      icon: "add",

      /**
       * Handle button clicks
       *
       * @instance
       * @param  {object} evt The click event
       */
      onClick: function alfresco_experimental_mdl_FabButton__onClick(evt) {
         this.publishPayload = this.getGeneratedPayload();
         this.alfPublish(this.publishTopic, this.publishPayload, !!this.publishGlobal, !!this.publishToParent);
         evt.stopPropagation();
      }
   });
});