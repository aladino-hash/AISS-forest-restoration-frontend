export function generateRestorationVerdict(
  restorationPotential: string
) {

  switch (restorationPotential) {

    case "Excellent":
      return {
        title:
          "✅ This land is highly suitable for productive ecological restoration.",

        description:
          "Based on satellite imagery, terrain characteristics and ecological analysis, FYNOS AI concludes that this property has outstanding restoration potential. The recommended strategy prioritizes rapid ecological recovery, biodiversity enhancement and sustainable economic productivity through phased agroforestry."
      };

    case "High":
      return {
        title:
          "🟢 This land has strong restoration potential.",

        description:
          "The environmental conditions indicate that restoration can be successfully implemented with appropriate species selection and phased agroforestry interventions."
      };

    case "Moderate":
      return {
        title:
          "🟡 This land is suitable for restoration with targeted interventions.",

        description:
          "The site presents restoration opportunities, although some ecological constraints should be addressed during implementation to maximize long-term success."
      };

    default:
      return {
        title:
          "🟠 This land requires priority restoration efforts.",

        description:
          "The property shows signs of ecological degradation. Restoration is still possible, but should begin with stabilization and recovery measures before long-term productive systems are established."
      };

  }

}