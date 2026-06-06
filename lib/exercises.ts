export type Exercise = {
  title: string;
  difficulty: string;
  duration: string;
  instructions: string[];
};

export type Position = "lying" | "sitting" | "standing";

export const exercises: Record<Position, Record<string, Exercise>> = {
  lying: {
    "ankle-rotations": {
      title: "Ankle Rotations",
      difficulty: "Easy",
      duration: "30 seconds",
      instructions: [
        "Lie down in a comfortable position.",
        "Lift one foot slightly.",
        "Slowly rotate your ankle in a circle.",
        "Repeat in the opposite direction.",
        "Switch to the other foot.",
      ],
    },

    "knee-bends": {
      title: "Knee Bends",
      difficulty: "Easy",
      duration: "30 seconds",
      instructions: [
        "Lie comfortably.",
        "Slowly bend one knee.",
        "Return to the starting position.",
        "Repeat on the other side.",
      ],
    },

    "arm-stretches": {
      title: "Arm Stretches",
      difficulty: "Easy",
      duration: "30 seconds",
      instructions: [
        "Lie comfortably.",
        "Raise both arms slowly.",
        "Stretch gently overhead.",
        "Lower arms carefully.",
      ],
    },
  },

  sitting: {
    "shoulder-rolls": {
      title: "Shoulder Rolls",
      difficulty: "Easy",
      duration: "30 seconds",
      instructions: [
        "Sit upright with your feet flat on the floor.",
        "Slowly roll your shoulders forward.",
        "Repeat the movement backwards.",
        "Keep the movement gentle and controlled.",
      ],
    },

    "seated-leg-raises": {
      title: "Seated Leg Raises",
      difficulty: "Easy",
      duration: "30 seconds",
      instructions: [
        "Sit upright on a stable chair.",
        "Slowly raise one leg forward.",
        "Hold briefly if comfortable.",
        "Lower the leg slowly.",
        "Repeat with the other leg.",
      ],
    },

    "neck-stretches": {
      title: "Neck Stretches",
      difficulty: "Easy",
      duration: "30 seconds",
      instructions: [
        "Sit upright and relax your shoulders.",
        "Slowly tilt your head to one side.",
        "Hold gently for a few seconds.",
        "Return to the centre.",
        "Repeat on the other side.",
      ],
    },
  },

  standing: {
    "heel-raises": {
      title: "Heel Raises",
      difficulty: "Easy",
      duration: "30 seconds",
      instructions: [
        "Stand with a chair or wall nearby for support.",
        "Slowly lift your heels from the floor.",
        "Hold briefly if comfortable.",
        "Lower your heels slowly.",
      ],
    },

    "side-steps": {
      title: "Side Steps",
      difficulty: "Easy",
      duration: "30 seconds",
      instructions: [
        "Stand upright with support nearby.",
        "Take a small step to the side.",
        "Bring the other foot to meet it.",
        "Repeat slowly in the opposite direction.",
      ],
    },

    "marching-on-spot": {
      title: "Marching on the Spot",
      difficulty: "Easy",
      duration: "30 seconds",
      instructions: [
        "Stand with support nearby if needed.",
        "Slowly lift one knee.",
        "Lower it carefully.",
        "Repeat with the other leg.",
        "Continue at a comfortable pace.",
      ],
    },
  },
};