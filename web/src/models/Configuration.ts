import { SecondFactorMethod } from "./Methods";

export interface Configuration {
    ga_tracking_id: string;
}

export interface ExtendedConfiguration {
    available_methods: Set<SecondFactorMethod>;
    one_factor_default_policy: boolean;
}