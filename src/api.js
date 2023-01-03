export const getComments = async() => {
	return [
	{
		id: "1",
		body: "First comment",
		username: "Jack",
		userId: "1",
		parentId: null,
		createdAt: "2022-08-16T23:00:33.010+02:00",
	},
	{
		id: "2",
		body: "Second comment",
		username: "John",
		userId: "2",
		parentId: null,
		createdAt: "2022-08-16T23:00:33.010+02:00",
	},
	{
		id: "3",
		body: "First comment first child",
		username: "John",
		userId: "2",
		parentId: "1",
		createdAt: "2022-08-15T23:00:33.010+02:00",
	},
	{
		id: "4",
		body: "Second comment second child",
		username: "John",
		userId: "2",
		parentId: "2",
		createdAt: "2022-08-16T23:00:33.010+02:00",
	},
	{
		id: "4",
		body: "First comment second child",
		username: "John",
		userId: "2",
		parentId: "1",
		createdAt: "2022-08-16T23:00:33.010+02:00",
	},
	];
};

export const createComment = async(text,parentId=null) => {
	return {
		id : Math.random().toString(36).substr(2,9),
		body : text,
		username: "Guest",
		parentId,
		userId:"1",
		createdAt: new Date().toISOString(),
	};
};