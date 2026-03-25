/**
 * API Configuration
 * Centralized API endpoint management
 */

export const API_BASE_URL = "https://st-martinez-api.onrender.com";

export const API_ENDPOINTS = {
  // Auth
  LOGIN: `${API_BASE_URL}/auth/login`,

  // Events
  EVENTS: `${API_BASE_URL}/events`,
  EVENT_BY_ID: (id: string | number) => `${API_BASE_URL}/events/${id}`,
  UPLOAD_COVER_IMAGE: (id: string | number) =>
    `${API_BASE_URL}/events/${id}/upload-cover-image`,
  UPLOAD_EVENT_IMAGES: (id: string | number) =>
    `${API_BASE_URL}/events/${id}/upload-image`,

  // Queries/Admissions
  QUERIES: `${API_BASE_URL}/queries`,
};
