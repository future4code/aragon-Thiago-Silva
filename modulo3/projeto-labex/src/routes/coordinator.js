export const navigateToHome = (navigate) => {
    navigate("/")
}

export const navigateToAdminPage = (navigate) => {
    navigate("/admin")
}

export const navigateToTripDetailsPage = (navigate, tripId) => {
    navigate(`/admin/${tripId}/details`)
}