import { Router, type Router as ExpressRouter } from "express";
import { userRouter } from "./user.js";
import { adminRouter } from "./admin.js";
import { spaceRouter } from "./space.js";

export const router: ExpressRouter = Router();

type User = {
	id: string;
	username: string;
	password: string;
	type: "admin" | "user";
};

const users = new Map<string, User>();

function createUserId() {
	return `user-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

router.post("/signup", (req, res) => {
	const { username, password, type } = req.body as {
		username?: unknown;
		password?: unknown;
		type?: unknown;
	};

	if (
		typeof username !== "string" ||
		username.trim().length === 0 ||
		typeof password !== "string" ||
		password.length === 0 ||
		(type !== "admin" && type !== "user")
	) {
		return res.status(400).json({ message: "Invalid signup details" });
	}

	if (users.has(username)) {
		return res.status(400).json({ message: "Username already exists" });
	}

	const user: User = {
		id: createUserId(),
		username,
		password,
		type
	};

	users.set(username, user);

	return res.status(200).json({ userId: user.id });
});


router.post("/signin", (req, res) => {
	res.json({ message: "signin" });
});

router.get("/elements", (req, res) => {

});

router.get("/avtars", (req, res) => {
	
});



router.use("/user", userRouter);
router.use("/space", spaceRouter)
router.use("/admin", adminRouter);
