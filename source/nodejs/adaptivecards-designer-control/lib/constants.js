"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otherTestPayload = "{\n\t\"$schema\": \"http://adaptivecards.io/schemas/adaptive-card.json\",\n\t\"type\": \"AdaptiveCard\",\n\t\"version\": \"1.0\",\n\t\"body\": [\n\t\t{\n\t\t\t\"type\": \"ActionSet\",\n\t\t\t\"actions\": [\n\t\t\t\t{\n\t\t\t\t\t\"type\": \"Action.ShowCard\",\n\t\t\t\t\t\"title\": \"Set due date\",\n\t\t\t\t\t\"card\": {\n\t\t\t\t\t\t\"type\": \"AdaptiveCard\",\n\t\t\t\t\t\t\"body\": [\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\"type\": \"Input.Date\",\n\t\t\t\t\t\t\t\t\"id\": \"dueDate\",\n\t\t\t\t\t\t\t\t\"title\": \"Select due date\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\"type\": \"Input.Text\",\n\t\t\t\t\t\t\t\t\"id\": \"comment\",\n\t\t\t\t\t\t\t\t\"isMultiline\": true,\n\t\t\t\t\t\t\t\t\"placeholder\": \"Add a comment\"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"actions\": [\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\"type\": \"Action.OpenUrl\",\n\t\t\t\t\t\t\t\t\"title\": \"OK\",\n\t\t\t\t\t\t\t\t\"url\": \"http://adaptivecards.io\"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t]\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"type\": \"Action.OpenUrl\",\n\t\t\t\t\t\"title\": \"View\",\n\t\t\t\t\t\"url\": \"http://adaptivecards.io\"\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}";
exports.defaultPayload = "{\n\t\"$schema\": \"http://adaptivecards.io/schemas/adaptive-card.json\",\n\t\"type\": \"AdaptiveCard\",\n\t\"version\": \"1.0\",\n\t\"body\": [\n\t\t{\n\t\t\t\"type\": \"Container\",\n\t\t\t\"items\": [\n\t\t\t\t{\n\t\t\t\t\t\"type\": \"TextBlock\",\n\t\t\t\t\t\"text\": \"Publish Adaptive Card schema\",\n\t\t\t\t\t\"weight\": \"bolder\",\n\t\t\t\t\t\"size\": \"medium\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"type\": \"ColumnSet\",\n\t\t\t\t\t\"columns\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"type\": \"Column\",\n\t\t\t\t\t\t\t\"width\": \"auto\",\n\t\t\t\t\t\t\t\"items\": [\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\"type\": \"Image\",\n\t\t\t\t\t\t\t\t\t\"url\": \"https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg\",\n\t\t\t\t\t\t\t\t\t\"size\": \"small\",\n\t\t\t\t\t\t\t\t\t\"style\": \"person\"\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"type\": \"Column\",\n\t\t\t\t\t\t\t\"width\": \"stretch\",\n\t\t\t\t\t\t\t\"items\": [\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\"type\": \"TextBlock\",\n\t\t\t\t\t\t\t\t\t\"text\": \"Matt Hidinger\",\n\t\t\t\t\t\t\t\t\t\"weight\": \"bolder\",\n\t\t\t\t\t\t\t\t\t\"wrap\": true\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\"type\": \"TextBlock\",\n\t\t\t\t\t\t\t\t\t\"spacing\": \"none\",\n\t\t\t\t\t\t\t\t\t\"text\": \"Created {{DATE(2017-02-14T06:08:39Z,SHORT)}}\",\n\t\t\t\t\t\t\t\t\t\"isSubtle\": true,\n\t\t\t\t\t\t\t\t\t\"wrap\": true\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t\"type\": \"Container\",\n\t\t\t\"items\": [\n\t\t\t\t{\n\t\t\t\t\t\"type\": \"TextBlock\",\n\t\t\t\t\t\"text\": \"Now that we have defined the main rules and features of the format, we need to produce a schema and publish it to GitHub. The schema will be the starting point of our reference documentation.\",\n\t\t\t\t\t\"wrap\": true\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"type\": \"FactSet\",\n\t\t\t\t\t\"facts\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"title\": \"Board:\",\n\t\t\t\t\t\t\t\"value\": \"Adaptive Card\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"title\": \"List:\",\n\t\t\t\t\t\t\t\"value\": \"Backlog\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"title\": \"Assigned to:\",\n\t\t\t\t\t\t\t\"value\": \"Matt Hidinger\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"title\": \"Due date:\",\n\t\t\t\t\t\t\t\"value\": \"Not set\"\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t],\n\t\"actions\": [\n\t\t{\n\t\t\t\"type\": \"Action.ShowCard\",\n\t\t\t\"title\": \"Set due date\",\n\t\t\t\"card\": {\n\t\t\t\t\"type\": \"AdaptiveCard\",\n\t\t\t\t\"body\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"type\": \"Input.Date\",\n\t\t\t\t\t\t\"id\": \"dueDate\",\n\t\t\t\t\t\t\"title\": \"Select due date\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"type\": \"Input.Text\",\n\t\t\t\t\t\t\"id\": \"comment\",\n\t\t\t\t\t\t\"isMultiline\": true,\n\t\t\t\t\t\t\"placeholder\": \"Add a comment\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"actions\": [\n\t\t\t\t    {\n\t\t\t\t        \"type\": \"Action.OpenUrl\",\n\t\t\t\t\t\t\"title\": \"OK\",\n\t\t\t\t\t\t\"url\": \"http://adaptivecards.io\"\n\t\t\t        }\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\": \"Action.OpenUrl\",\n\t\t\t\"title\": \"View\",\n\t\t\t\"url\": \"http://adaptivecards.io\"\n\t\t}\n\t]\n}";
//# sourceMappingURL=constants.js.map