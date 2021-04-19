import * as mongoose from "mongoose";
import { MainTest } from "./src/test/main";

mongoose
    .connect("mongodb+srv://matabrebomdemais:braziliansquad2021@cluster0.wfr5h.mongodb.net/Cluster0?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(_ => new MainTest().run());