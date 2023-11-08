import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoComponentsMeta extends Schema.Component {
  collectionName: 'components_seo_components_metas';
  info: {
    displayName: 'Meta';
    icon: 'search';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    slug: Attribute.String;
  };
}

export interface UiComponentsHero extends Schema.Component {
  collectionName: 'components_ui_components_heroes';
  info: {
    displayName: 'Hero';
    icon: 'desktop';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    buttonText: Attribute.String;
    buttonUrl: Attribute.String;
    background: Attribute.Media;
  };
}

export interface VehiclesECommerceAddress extends Schema.Component {
  collectionName: 'components_vehicles_e_commerce_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    street: Attribute.String;
    city: Attribute.String;
    stateOrProvince: Attribute.String;
    zipCode: Attribute.String;
    country: Attribute.String;
  };
}

export interface VehiclesECommerceEnginesSpecifications extends Schema.Component {
  collectionName: 'components_vehicles_e_commerce_engines_specifications';
  info: {
    displayName: 'Engines Specifications';
  };
  attributes: {
    engineType: Attribute.Enumeration<['Regular', 'Wankel']>;
    numberOfCilinders: Attribute.Integer;
    horsePower: Attribute.Decimal;
    torque: Attribute.Float;
  };
}

export interface VehiclesECommercePaymentInformation extends Schema.Component {
  collectionName: 'components_vehicles_e_commerce_payment_informations';
  info: {
    displayName: 'Payment Information';
  };
  attributes: {
    paymentMethod: Attribute.Enumeration<['credit_card', 'paypal', 'bank_transfer']>;
    paymentConfirmationNumber: Attribute.String;
  };
}

export interface VehiclesECommerceVehicleFeatures extends Schema.Component {
  collectionName: 'components_vehicles_e_commerce_vehicle_features';
  info: {
    displayName: 'Vehicle Features';
  };
  attributes: {
    Name: Attribute.String;
    Description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo-components.meta': SeoComponentsMeta;
      'ui-components.hero': UiComponentsHero;
      'vehicles-e-commerce.address': VehiclesECommerceAddress;
      'vehicles-e-commerce.engines-specifications': VehiclesECommerceEnginesSpecifications;
      'vehicles-e-commerce.payment-information': VehiclesECommercePaymentInformation;
      'vehicles-e-commerce.vehicle-features': VehiclesECommerceVehicleFeatures;
    }
  }
}
