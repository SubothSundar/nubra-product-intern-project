
  # Wireframe Prompts for Nubra

  This is a code bundle for Wireframe Prompts for Nubra.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
  ## Feature Proposal: "Strategy Replay & Automate"
  
  ### Problem Statement
  Sophisticated manual traders on Nubra have proven, profitable strategies. However, they hesitate to move to algorithmic trading due to the perceived complexity of strategy builders, a lack of trust in abstract rules, and the daunting task of translating their intuition into code or complex logic. They trust their own past actions far more than any new tool.
  
  ### Proposed Solution
  "Strategy Replay & Automate" is a feature that analyzes a user's trade history and allows them to convert a successful closed trade into a simple, automated rule with a single click.
  
  ### User Journey
  1. A user navigates to their "Trade History."
  2. Next to a profitable trade, they click a new [Automate this Strategy] button.
  3. A new screen appears, pre-populated with data from that specific trade.
  4. The system analyzes the market conditions at the time of entry (for example, key indicator values like RSI, Moving Averages) and auto-generates a simple, editable WHEN–THEN rule.
  5. The user can then one-click backtest this rule on historical data to validate its performance.
  6. If satisfied, they can deploy it for paper trading or live trading.
  
  ### Target Audience
  The primary user is the "Profitable but Cautious Manual Trader." This user is comfortable with the Nubra platform, understands market dynamics, has a history of successful trades, but is hesitant to take the leap into automation due to the barriers of time, complexity, and trust.
  
  ### User Stories
  - As a profitable manual trader, I want to see the logical conditions behind my successful trades, so that I can understand the rules of my own strategy.
  - As a time-constrained trader, I want to convert a past trade into an algorithm without writing code or using a complex builder, so that I can automate my strategy quickly.
  - As a cautious trader, I want to backtest the rule generated from my trade, so that I can gain confidence in its performance before deploying it.
  
  ### Success Metrics
  - Adoption Rate: Percentage of eligible users (with more than one profitable trade) who click the "Automate this Strategy" button.
  - Engagement Rate: Number of backtests run via this feature per user.
  - Conversion Rate: Percentage of users who deploy a generated strategy to paper trading or live trading.
  - Retention: Compare the 3‑month retention rate of users who engage with this feature versus those who do not.
  
  ## Wireframes & User Flow
  The following wireframes visualize the user journey for the "Strategy Replay & Automate" feature, designed to integrate seamlessly into the existing Nubra dark-themed UI.
  
  #### Screen 1: Trade History
  The user's journey begins in a familiar place. A clear call-to-action is placed next to eligible trades, making the feature discoverable and contextual.
  
  (Insert Wireframe Image 1 Here)
  
  #### Screen 2: Strategy Replay & Automate
  This is the core of the feature. The two-column layout allows the user to reference their original trade while easily understanding and modifying the generated algorithm.
  
  (Insert Wireframe Image 2 Here)
  
  #### Screen 3: Backtest Results
  The results are presented in a clean, digestible format. Key performance metrics are highlighted, and the next steps are clear, encouraging the user to move forward with deployment.
  
  (Insert Wireframe Image 3 Here)
  
  ## Conclusion
  The "Strategy Replay & Automate" feature is more than an incremental improvement; it is a strategic initiative that can become a core pillar of the Nubra user journey. By creating an intuitive and trust-building bridge to automation, Nubra can:
  
  - Increase Retention: By providing a clear next step for its most valuable manual traders.
  - Create a Competitive Moat: By offering a unique, behavior-driven onboarding to algorithmic trading that competitors lack.
  - Drive Future Growth: By nurturing a new cohort of automated traders who are deeply integrated into the Nubra ecosystem.
  
  This feature directly addresses the needs of a key user segment and aligns with a strategic opportunity in the market, positioning Nubra for continued leadership and innovation.