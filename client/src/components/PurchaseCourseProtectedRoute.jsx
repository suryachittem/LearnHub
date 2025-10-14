import { useGetCourseDetailsWithStatusQuery } from "@/features/api/purchaseApi";
import { useParams, Navigate } from "react-router-dom";

const PurchaseCourseProtectedRoute = ({ children }) => {
  const params = useParams();
  const { courseId } = params;
  const { data, isLoading } = useGetCourseDetailsWithStatusQuery(courseId);

  if (isLoading) return <h1>Loading...</h1>;
  return data?.purchased ? (
    children
  ) : (
    <Navigate to={`/course-details/${courseId}`} />
  );
};

export default PurchaseCourseProtectedRoute;
