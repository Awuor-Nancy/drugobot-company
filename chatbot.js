// User input
const userInput = prompt("Hi there! How can I help you today?");

// Non-judgmental response based on user input
let response;
switch (userInput.toLowerCase()) {
  case "feeling cravings":
    response = "Cravings are a common challenge in recovery. Remember, you're not alone. Here are some resources to help you cope:";
    break;
  case "struggling with recovery":
    response = "Recovery is a journey, not a destination. Don't be discouraged by setbacks. I'm here for you. Tell me more about your struggles.";
    break;
  case "seeking help":
    response = "It's great that you're seeking help. You're making a positive choice. I can offer resources and support, but for professional guidance, consider reaching out to one of these hotlines:";
    break;
  default:
    response = "I'm still under development, but I'm here to listen. Tell me more about what you're going through.";
    break;
}

// Provide resources based on the user's needs
let resources = "";
switch (userInput.toLowerCase()) {
  case "feeling cravings":
    resources += "- Deep breathing exercises: ";
    resources += "https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques";
    resources += "\n- Mindfulness meditation: ";
    resources += "https://www.headspace.com/";
    break;
  case "struggling with recovery":
    resources += "- Support groups: ";
    resources += "https://na.org/";
    resources += "\n- Online forums: ";
    resources += "https://drugs-forum.com/";
    break;
  case "seeking help":
    resources += "- SAMHSA National Helpline: 1-800-662-HELP (4357)";
    resources += "\n- The Recovery Village: https://www.therecoveryvillage.com/";
    break;
}

// Display the response and resources (if any) to the user
alert(response + "\n\n" + resources);