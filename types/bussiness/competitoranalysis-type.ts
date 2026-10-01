

export type CompetitorAnalysisRequest = {
    company_data: string;
    company: {
        additionalProp1: {};
    };
        summary_text: string;
    company_analysis: {
        additionalProp1: {};
    };
    executive_snapshot: {
        additionalProp1: {};
    };
        digital_presence: {
        additionalProp1: {};
        },
        market_position: {
        additionalProp1: {};
        },
        positioning_analysis: {
        additionalProp1: {};
        },
        strengths_and_weaknesses: {
        additionalProp1: {};
        },
    growth_opportunities: string[];
        recommended_actions: string[];
        company_id: string;
        region: string;
        instagram_username: string;
        company_name: string;
        linkedin_url: string;
        competitors: string[];
        competitor_limit: number;
        post_limit: number;
    }

export type CompetitorAnalysisResponse = {
    success: boolean;
    data: any;
}
